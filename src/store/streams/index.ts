import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  of,
  retry,
  switchMap,
  tap,
} from 'rxjs'

import { store, StoreObservableType } from '..'
import { setMapSearchOptions } from '../map/mapSlice'
import { MapSearch, PlaceTypesType, placeTypeZoom } from '../static'

export const createObservables = (store$: StoreObservableType) => {
  const city$ = store$.pipe(
    map((state) => state.map.searchText),
    distinctUntilChanged(),
    // throttleTime(500),
    filter((text) => text.length > 0),
    debounceTime(500),
    tap(() =>
      store.dispatch(setMapSearchOptions({ data: [], fetching: true }))
    ),
    switchMap((searchText) =>
      searchText
        ? fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?country=us&fuzzyMatch=true&access_token=pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ`
          ).then((response) => response.json())
        : of([])
    ),
    // tap((v) => console.log('tapping: ', v)),
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
  return { city$ }
}

// const homesMap$ = mapHomesWhere$.pipe(
//   tap(() => store.dispatch(setHomesMap({ fetching: true }))),
//   switchMap((whereCond) => {
//     const client = createUrqlClient()
//     return client
//       .query<SearchHomesByLocationQuery>(SearchHomesByLocationDocument, {
//         where: whereCond,
//       })
//       .toPromise()
//   }),

//   tap((value) =>
//     store.dispatch(
//       setHomesMap({
//         data: value.data?.homes,
//         fetching: false,
//         error: value.error,
//       })
//     )
//   )
// )
// const homesList$ = mapHomesWhere$.pipe(
//   tap(() => store.dispatch(setHomesList({ fetching: true }))),
//   switchMap((whereCond) => {
//     const client = createUrqlClient()
//     return client
//       .query<SearchHomesByLocationDetailedQuery>(
//         SearchHomesByLocationDetailedDocument,
//         {
//           where: whereCond,
//         }
//       )
//       .toPromise()
//   }),
//   tap((value) =>
//     store.dispatch(
//       setHomesList({
//         data: value.data?.homes,
//         fetching: false,
//         error: value.error,
//       })
//     )
//   )
// )
