import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  from,
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
} from 'src/generated/graphql'

import { AsyncUser } from 'src/types'
import { CitySlice, setCityList } from '../cities/citySlice'
import { setHomesMap } from '../homes/homeSlice'
import { store } from '..'

export const createObservables = (
  store$: Observable<{
    user: AsyncUser
    city: CitySlice
    homes: { homesMap: any; homesList: any }
  }>
) => {
  const mapHomes$ = store$.pipe(
    map((state) => state?.city?.selectedCity?.bounds),
    distinctUntilChanged(),
    debounceTime(500),
    tap((v) => console.log('Tapping hoems: ', v)),
    switchMap((bounds) => {
      const client = createUrqlClient()
      const [ne, sw] = bounds!
      return client
        .query<SearchHomesByLocationQuery>(SearchHomesByLocationDocument, {
          where: {
            lat: { _gt: ne[1], _lt: sw[1] },
            lng: { _gt: ne[0], _lt: sw[0] },
          },
        })
        .toPromise()
    }),
    tap((v) => console.log('Tapping hoems after querying: ', v)),
    tap((value) =>
      store.dispatch(
        setHomesMap({
          data: value.data?.homes,
          error: value.error,
          fetching: false,
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
    tap((value) => console.log('Taping cities: ', value)),
    map((value) =>
      store.dispatch(setCityList({ data: value, fetching: false }))
    ),
    retry(2),
    catchError((e) => of(null))
  )
  return { mapHomes$, city$ }
}

// export const useFetchCities = () => {
//   useEffect(() => {
//     const cityListener = city$.subscribe({
//       next: (v) => console.log('cityListener: ', v),
//       error: (err) => console.log('cityListener error: ', err),
//     })
//     return () => {
//       cityListener.unsubscribe()
//     }
//   }, [])
// }
// export const useFetchHomes = () => {
//   useEffect(() => {
//     console.log('useFetchHomes')

//     const cityListener = mapHomes$.subscribe({
//       next: (v) => console.log('homesListener: ', v),
//       error: (err) => console.log('homesListener error: ', err),
//     })
//     return () => {
//       cityListener.unsubscribe()
//     }
//   }, [])
// }
