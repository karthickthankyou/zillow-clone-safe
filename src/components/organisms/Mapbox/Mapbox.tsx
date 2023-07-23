/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import MapGl from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export type MarkerType = { id: string; lat: number; lng: number }[]

type MapProps = React.ComponentProps<typeof MapGl>

type IMapProps = MapProps & { height?: string }

export const MapBox = ({
  height = 'calc(100vh - 4rem)',
  ...props
}: IMapProps) => (
  <div className='overflow-hidden rounded shadow-inner'>
    <MapGl
      {...props}
      mapStyle='mapbox://styles/iamkarthick/clebahxqe001701mo1i1adtw3'
      mapboxAccessToken='pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ'
      style={{ height }}
      scrollZoom={false}
    >
      {props.children}
    </MapGl>
  </div>
)

export default MapBox
