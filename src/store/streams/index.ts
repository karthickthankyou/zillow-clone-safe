import {
  catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  of,
  retry,
  switchMap,
  tap,
} from 'rxjs'
import { createUrqlClient } from 'src/lib/urql'
import {
  SearchHomesByLocationQuery,
  SearchHomesByLocationDocument,
  SearchHomesByLocationDetailedQuery,
  SearchHomesByLocationDetailedDocument,
} from 'src/generated/graphql'

import { AsyncUser } from 'src/types'
import { CitySlice, setCityList } from '../cities/citySlice'
import { setHomesMap, setHomesList } from '../homes/homeSlice'
import { store } from '..'

export const createObservables = (
  store$: Observable<{
    user: AsyncUser
    city: CitySlice
    homes: { homesMap: any; homesList: any }
  }>
) => {
  const mapHomesWhere$ = store$.pipe(
    map((state) => state?.city?.mapBounds),
    distinctUntilChanged(),
    debounceTime(300),
    map((bounds) => {
      const [ne, sw] = bounds!
      return {
        lat: { _gt: ne[1], _lt: sw[1] },
        lng: { _gt: ne[0], _lt: sw[0] },
      }
    })
  )

  const homesMap$ = mapHomesWhere$.pipe(
    tap(() => store.dispatch(setHomesMap({ fetching: true }))),
    switchMap((whereCond) => {
      const client = createUrqlClient()
      return client
        .query<SearchHomesByLocationQuery>(SearchHomesByLocationDocument, {
          where: whereCond,
        })
        .toPromise()
    }),

    tap((value) =>
      store.dispatch(
        setHomesMap({
          data: value.data?.homes,
          fetching: false,
          error: value.error,
        })
      )
    )
  )
  const homesList$ = mapHomesWhere$.pipe(
    tap(() => store.dispatch(setHomesList({ fetching: true }))),
    switchMap((whereCond) => {
      const client = createUrqlClient()
      return client
        .query<SearchHomesByLocationDetailedQuery>(
          SearchHomesByLocationDetailedDocument,
          {
            where: whereCond,
          }
        )
        .toPromise()
    }),
    tap((value) =>
      store.dispatch(
        setHomesList({
          data: value.data?.homes,
          fetching: false,
          error: value.error,
        })
      )
    )
  )

  const city$ = store$.pipe(
    map((state) => state?.city.citySearchText),
    distinctUntilChanged(),
    // throttleTime(500),
    filter((text) => text.length > 0),
    debounceTime(500),
    tap(() => store.dispatch(setCityList({ data: [], fetching: true }))),
    switchMap((searchText) =>
      searchText
        ? fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?country=us&types=place&fuzzyMatch=true&access_token=pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ`
          ).then((response) => response.json())
        : of([])
    ),
    map((value) =>
      value.features.length > 0
        ? value.features.map((features: any) => ({
            displayName: features.place_name,
            lng: features.geometry.coordinates[0],
            lat: features.geometry.coordinates[1],
          }))
        : []
    ),
    map((value) =>
      store.dispatch(setCityList({ data: value, fetching: false }))
    ),
    retry(2),
    catchError((e) => of(null))
  )
  return { city$, homesMap$, homesList$ }
}
