import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

// mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'TOKEN_NOT_FOUND'
const accessToken =
  'pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ'

interface IMapBoxProps {
  latitude: number
  longitude: number
  zoom: number
  markers: { latitude: number; longitude: number }[]
  className?: string
}

const MapBox = ({
  longitude,
  latitude,
  zoom,
  markers,
  className,
}: IMapBoxProps) => {
  const [viewport, setViewport] = useState({
    longitude,
    latitude,
    zoom,
  })

  return (
    <div className={`relative w-full ${className} `}>
      <ReactMapGL
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...viewport}
        scrollZoom
        touchZoom
        maxZoom={16}
        minZoom={13}
        width='100%'
        height='100%'
        pitch={45}
        mapboxApiAccessToken={accessToken}
        onViewportChange={setViewport}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            latitude={marker.latitude}
            longitude={marker.longitude}
          >
            <div
              className='w-4 h-4 border-2 border-blue-600 rounded-full'
              // onMouseOver={() => console.log('Hello')}
              // onFocus={() => console.log('Hello')}
            />
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  )
}
export default MapBox
