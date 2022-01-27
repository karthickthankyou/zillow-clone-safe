import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import ReactMapGL, {
  GeolocateControl,
  Marker,
  NavigationControl,
} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'TOKEN_NOT_FOUND'
const accessToken =
  'pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ'

type Location = {
  longitude: number
  latitude: number
  zoom: number
}
interface IMapBoxProps {
  viewport: Location
  setViewport: (arg: Location) => void
  markers: { id: string; latitude: number; longitude: number }[]
  className?: string
}

const MapBox = ({
  viewport,
  setViewport,
  markers,
  className,
}: IMapBoxProps) => (
  <div className={`relative w-full ${className} `}>
    <ReactMapGL
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...viewport}
      dragPan
      scrollZoom={false}
      maxZoom={20}
      minZoom={10}
      width='100%'
      height='100%'
      pitch={60}
      mapboxApiAccessToken={accessToken}
      onViewportChange={({ latitude, longitude, zoom }) => {
        setViewport({ zoom, latitude, longitude })
      }}
      // onInteractionStateChange={({ isDragging }) => setisDragging(isDragging)}
    >
      {/* <GeolocateControl /> */}
      {/* <NavigationControl className='bottom-0 right-0 z-10 p-3 mb-8' /> */}
      <NavigationControl className='p-2' />
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          latitude={marker.latitude}
          longitude={marker.longitude}
        >
          <div className='w-4 h-4 border-2 border-blue-600 rounded-full' />
        </Marker>
      ))}
    </ReactMapGL>
  </div>
)

export default MapBox
