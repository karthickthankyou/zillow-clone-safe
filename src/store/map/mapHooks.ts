import { useEffect, useRef, useState } from 'react'
import { MapRef } from 'react-map-gl'
import { catchError, debounceTime, EMPTY, Subject, map } from 'rxjs'
import { useAppDispatch, useAppSelector } from '..'
import { selectViewport, setViewport, setBounds } from './mapSlice'
import { DEBOUNCE_DELAY, Viewport } from '../static'
import { useMap } from './mapContext'

export const useDispatchMapBounds = ({ viewport }: { viewport: Viewport }) => {
  const dispatch = useAppDispatch()

  const { map: mapObj } = useMap()

  /** Subject. Set bounds when viewport changes. */
  const [pipeline$] = useState(() => new Subject())

  useEffect(() => {
    const subscription = pipeline$
      .pipe(
        debounceTime(DEBOUNCE_DELAY),
        map(() => mapObj.getBounds().toArray()),
        catchError(() => EMPTY)
      )
      .subscribe((v) => {
        dispatch(setBounds(v))
      })
    return () => subscription.unsubscribe()
  }, [pipeline$, dispatch, mapObj])

  useEffect(() => {
    pipeline$.next({})
  }, [pipeline$, viewport])
}

export const useInitializeViewport = () => {
  const viewport = useAppSelector(selectViewport)!

  const dispatch = useAppDispatch()
  const setViewportFn = (v: Viewport) => {
    dispatch(setViewport(v))
  }

  useDispatchMapBounds({ viewport })

  const mapRef = useRef<MapRef>(null)

  return { viewport, setViewport: setViewportFn, mapRef }
}
