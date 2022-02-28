import React from 'react'
import ReactMapGL, {
  FlyToInterpolator,
  EasingFunction,
  TransitionInterpolator,
} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { useAppSelector } from 'src/store'

import { selectMapLocation, setMapBounds } from 'src/store/cities/citySlice'

import {
  useDispatchMapBoundsWhenViewportChanges,
  useViewport,
} from 'src/store/cities/cityHooks'
import MapboxContent from '../MapboxContent'
import mapStyle from './mapLight.json'

const accessToken =
  'pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ'

export type MarkerType = { id: string; lat: number; lng: number }[]

const MapBox = () => {
  /** useViewport feeds viewport state to the map. */
  const [viewport, setViewPort, mapRef] = useViewport()

  /** Dispatch map bounds when viewport changes. */
  useDispatchMapBoundsWhenViewportChanges(viewport, mapRef, setMapBounds)

  return (
    <ReactMapGL
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...viewport}
      onViewportChange={(v) => {
        setViewPort(v)
      }}
      dragPan
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
      <MapboxContent viewport={viewport} />
    </ReactMapGL>
  )
}

export default MapBox
