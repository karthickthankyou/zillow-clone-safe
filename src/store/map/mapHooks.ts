import { useEffect, useRef, useState } from 'react'
import { MapRef } from 'react-map-gl'
import { catchError, debounceTime, EMPTY, Subject, map } from 'rxjs'
import { Bounds, Viewport } from 'src/types'
import { useAppDispatch, useAppSelector } from '..'
import {
  setViewport,
  setBounds,
  setDebouncedViewport,
  selectViewport,
} from './mapSlice'
import { DEBOUNCE_DELAY } from '../static'
import { useMap } from './mapContext'
import { searchPlaces$ } from '../streams'

export const useDispatchMapBounds = ({ viewport }: { viewport: Viewport }) => {
  const dispatch = useAppDispatch()

  const { map: mapObj } = useMap()

  /** Subject. Set bounds when viewport changes. */
  const [pipeline$] = useState(() => new Subject<Viewport>())

  useEffect(() => {
    const subscription = pipeline$
      .pipe(
        debounceTime(DEBOUNCE_DELAY),
        map((v): { viewportDebounced: Viewport; bounds: Bounds } => ({
          viewportDebounced: v,
          bounds: mapObj.getBounds().toArray(),
        })),
        catchError(() => EMPTY)
      )
      .subscribe(({ viewportDebounced, bounds }) => {
        dispatch(setBounds(bounds))
        dispatch(setDebouncedViewport(viewportDebounced))
      })
    return () => subscription.unsubscribe()
  }, [pipeline$, dispatch, mapObj])

  useEffect(() => {
    pipeline$.next(viewport)
  }, [pipeline$, viewport])
}

export const useInitializeViewport = () => {
  const viewport = useAppSelector(selectViewport)

  const dispatch = useAppDispatch()
  const setViewportFn = (v: Viewport) => {
    dispatch(setViewport(v))
  }

  useDispatchMapBounds({ viewport })

  const mapRef = useRef<MapRef>(null)

  return { viewport, setViewport: setViewportFn, mapRef }
}

export const useSearchPlaces = () => {
  useEffect(() => {
    const subscription = searchPlaces$.subscribe({
      complete: () => {
        console.log('Completed.')
      },
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [])
}
