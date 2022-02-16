import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { MapRef } from 'react-map-gl'
import { catchError, debounceTime, EMPTY, map, Subject } from 'rxjs'

import { useAppDispatch } from '..'
import { DEBOUNCE_DELAY } from '../static'
import { MapLocation } from './citySlice'

// export const useSearchCity = () => {
//   const dispatch = useAppDispatch()
//   const searchTerm = useAppSelector(selectCitySearchText)

//   const [{ data, fetching, error, stale }] = useSearchCitiesQuery({
//     variables: { search: searchTerm },
//   })

//   useEffect(() => {
//     dispatch(setCityOptions({ data, fetching, error, stale }))
//   }, [data, dispatch, error, fetching, stale])
// }

// export const usePopularCities = () => {
//   const dispatch = useAppDispatch()
//   const [{ data, fetching, error, stale }] = useGetCitiesQuery()

//   useEffect(() => {
//     dispatch(setPopularCities({ data, fetching, error, stale }))
//   }, [data, dispatch, error, fetching, stale])
// }

export const useDispatchMapBoundsWhenViewportChanges = (
  viewport: {
    latitude: number
    longitude: number
    zoom: number
  },
  ref: React.MutableRefObject<MapRef | null>,
  setBounds: ActionCreatorWithPayload<any, string>
) => {
  const dispatch = useAppDispatch()
  /**
   * Setup pipeline.
   */
  const [pipeline$] = useState(() => new Subject())

  useEffect(() => {
    const subscription = pipeline$
      .pipe(
        debounceTime(DEBOUNCE_DELAY),
        map(() => ref.current?.getMap().getBounds().toArray()),
        catchError(() => EMPTY)
      )
      .subscribe((v) => dispatch(setBounds(v)))
    return () => subscription.unsubscribe()
  }, [pipeline$, ref, setBounds, dispatch])

  /**
   * Trigger pipeline when viewport changes.
   */
  useEffect(() => {
    pipeline$.next({})
  }, [pipeline$, viewport])
}

export const useViewport = (
  overrideProp: MapLocation
): [
  MapLocation,
  React.Dispatch<React.SetStateAction<MapLocation>>,
  React.MutableRefObject<MapRef | null>
] => {
  /**
   * Initialize viewport.
   */
  const ref = React.useRef<MapRef | null>(null)
  const [viewport, setViewPort] = useState(() => ({
    latitude: 0,
    longitude: 0,
    zoom: 12,
  }))

  /**
   * Override viewport with overrideProp.
   */
  useEffect(() => {
    setViewPort((state) => ({
      latitude: overrideProp.latitude || 40.7128,
      longitude: overrideProp.longitude || -74.006,
      zoom: state.zoom,
    }))
  }, [overrideProp, setViewPort])
  return [viewport, setViewPort, ref]
}
