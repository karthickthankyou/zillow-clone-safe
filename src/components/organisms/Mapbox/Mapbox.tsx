import React, { useMemo, SetStateAction, Dispatch } from 'react'
import ReactMapGL, {
  // MapProvider,
  FlyToInterpolator,
  EasingFunction,
  TransitionInterpolator,
  MapRef,
} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { useAppSelector } from 'src/store'

import {
  MapLocation,
  selectMapLocation,
  setMapBounds,
} from 'src/store/cities/citySlice'

import {
  useDispatchMapBoundsWhenViewportChanges,
  useViewport,
} from 'src/store/cities/cityHooks'
import MapboxContent from '../MapboxContent'
import mapStyle from './mapLight.json'

const accessToken =
  'pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ'

export type MarkerType = { id: string; lat: number; lng: number }[]

export type MapContextType = [
  MapLocation,
  Dispatch<SetStateAction<MapLocation>>,
  React.RefObject<MapRef> | null
]
export const MapContext = React.createContext<MapContextType>([
  {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  () => {},
  null,
])

const MapBox = () => {
  /** useViewport feeds viewport state to the map. */
  const [viewport, setViewport, mapRef] = useViewport()

  /** Dispatch map bounds when viewport changes. */
  useDispatchMapBoundsWhenViewportChanges(viewport, mapRef, setMapBounds)

  const mapContextValue = useMemo<MapContextType>(
    () => [viewport, setViewport, mapRef],
    [viewport, setViewport, mapRef]
  )

  return (
    <MapContext.Provider value={mapContextValue}>
      <ReactMapGL
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...viewport}
        onViewportChange={(v) => {
          setViewport(v)
        }}
        dragPan
        dragRotate={false}
        scrollZoom={false}
        width='100%'
        height='100%'
        ref={(el) => {
          mapRef.current = el
        }}
        // transitionInterpolator={new TransitionInterpolator()}
        // transitionDuration={600}
        // transitionEasing={(t: number) => Math.sin((t * Math.PI) / 2)}
        // pitch={45}
        mapboxApiAccessToken={accessToken}
        mapStyle={mapStyle}
      >
        <MapboxContent />
      </ReactMapGL>
    </MapContext.Provider>
  )
}

export default MapBox
