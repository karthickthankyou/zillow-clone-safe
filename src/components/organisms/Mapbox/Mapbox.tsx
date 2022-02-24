import React from 'react'
import ReactMapGL from 'react-map-gl'
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
  /**
   * useViewport gets override map location.
   */
  const updatedMapPosition = useAppSelector(selectMapLocation)!
  console.log('updatedMapPosition', updatedMapPosition)
  const [viewport, setViewPort, ref] = useViewport(updatedMapPosition)

  /**
   * Dispatch map bounds when viewport changes.
   */
  useDispatchMapBoundsWhenViewportChanges(viewport, ref, setMapBounds)

  return (
    <div className='relative w-full h-screen'>
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
          ref.current = el
        }}
        // pitch={45}
        mapboxApiAccessToken={accessToken}
        mapStyle={mapStyle}
      >
        <MapboxContent />
      </ReactMapGL>
    </div>
  )
}

export default MapBox
