/* eslint-disable camelcase */
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  EMPTY,
  filter,
  map,
  of,
  retry,
  Subject,
  switchMap,
  tap,
} from 'rxjs'

import { MapSearch, PlaceTypesType } from 'src/types'
import { useEffect, useMemo, useState } from 'react'
import { AddressSearchType } from 'src/components/templates/AddNewHomeTemplate/utils'

import { placeTypeZoom } from '../static'
import { store, store$ } from '..'
import { setMapSearchOptions } from '../map/mapSlice'

export const searchPlaces$ = store$.pipe(
  map((state) => state.map.searchText),
  distinctUntilChanged(),
  filter((text) => text.length > 0),
  debounceTime(500),
  tap(() => store.dispatch(setMapSearchOptions({ data: [], fetching: true }))),

  switchMap((searchText) =>
    searchText
      ? fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?country=us&fuzzyMatch=true&access_token=pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ`
        )
          .then((response) => response.json())
          .then((value) =>
            value.features.length > 0
              ? value.features.map((features: any) => ({
                  displayName: features.place_name,
                  longitude: features.geometry.coordinates[0],
                  latitude: features.geometry.coordinates[1],
                  zoom:
                    placeTypeZoom[features.place_type[0] as PlaceTypesType] ||
                    6,
                }))
              : []
          )
          .catch((err) => [])
      : of([])
  ),
  map((value) => {
    store.dispatch(setMapSearchOptions({ data: value, fetching: false }))
  }),
  tap(() => console.log('after mapping...'))
)

export const useSearchAddress = ({
  searchText,
}: {
  searchText: string
}): { data: AddressSearchType[]; loading: boolean; error: any } => {
  const searchAddressSubject$ = useMemo(
    () => new Subject<{ text: string }>(),
    []
  )

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)
  useEffect(() => {
    const subscription = searchAddressSubject$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),

        tap(() => {
          setLoading(true)
          setError(null)
        }),
        switchMap(({ text }) =>
          text
            ? fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?country=us&types=address&language=en&access_token=pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ`
              ).then((response) => response.json())
            : of([])
        ),
        tap(() => {
          setLoading(false)
        }),
        map((v) => {
          if (v?.features?.length === 0) {
            setError('No results found.')
            return [
              {
                address: undefined,
                longitude: undefined,
                latitude: undefined,
                postcode: undefined,
                city: undefined,
                state: undefined,
              },
            ]
          }

          return (
            v.features?.map(
              (item: { place_name?: any; center?: any; context?: any }) => {
                const { context } = item
                const postcode = context.find(
                  (contextItem: { id: string | string[] }): any =>
                    contextItem.id.includes('postcode')
                ).text
                const city = context.find(
                  (contextItem: { id: string | string[] }): any =>
                    contextItem.id.includes('place')
                ).text
                const state = context.find(
                  (contextItem: { id: string | string[] }): any =>
                    contextItem.id.includes('region')
                ).text
                return {
                  address: item.place_name,
                  longitude: item.center[0],
                  latitude: item.center[1],
                  postcode,
                  city,
                  state,
                }
              }
            ) || []
          )
        }),
        catchError((err) => {
          setError(err)
          return EMPTY
        })
      )
      .subscribe((v) => {
        setData(v)
      })
    return () => {
      subscription.unsubscribe()
    }
  }, [searchAddressSubject$])

  useEffect(() => {
    searchAddressSubject$.next({ text: searchText })
  }, [searchAddressSubject$, searchText])

  return { data, loading, error } as const
}

export const searchAddress$ = store$.pipe(
  map((state) => state.map.searchText),
  distinctUntilChanged(),
  filter((text) => text.length > 0),
  debounceTime(500),
  tap(() => store.dispatch(setMapSearchOptions({ data: [], fetching: true }))),
  switchMap((searchText) =>
    searchText
      ? fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?country=us&fuzzyMatch=true&access_token=pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ`
        ).then((response) => response.json())
      : of([])
  ),
  map((value): MapSearch[] =>
    value.features.length > 0
      ? value.features.map((features: any) => ({
          displayName: features.place_name,
          longitude: features.geometry.coordinates[0],
          latitude: features.geometry.coordinates[1],
          zoom: placeTypeZoom[features.place_type[0] as PlaceTypesType] || 6,
        }))
      : []
  ),
  map((value) => {
    store.dispatch(setMapSearchOptions({ data: value, fetching: false }))
  }),
  retry(2),
  catchError(() => of(null))
)
