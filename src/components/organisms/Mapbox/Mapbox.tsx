/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react'
import ReactMapGL, { InteractiveMapProps } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { Viewport } from 'src/store/static'
import { useInitializeViewport } from 'src/store/map/mapHooks'
import mapStyleLight from './mapLight.json'

export type MarkerType = { id: string; lat: number; lng: number }[]

const defaultMapProps: InteractiveMapProps = {
  dragPan: true,
  dragRotate: false,
  scrollZoom: false,
  width: '100%',
  height: '100%',
  mapboxApiAccessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  mapStyle: mapStyleLight,
}

const MapBox = ({
  children,
  props = defaultMapProps,
}: {
  children: ReactElement | ReactElement[]
  props?: InteractiveMapProps
}) => {
  /** useViewport feeds viewport state to the map. */
  const { viewport, setViewport } = useInitializeViewport()

  return (
    <ReactMapGL
      latitude={viewport.latitude}
      longitude={viewport.longitude}
      zoom={viewport.zoom}
      onViewportChange={({ latitude, longitude, zoom }: Viewport) => {
        setViewport({ latitude, longitude, zoom })
      }}
      {...props}
    >
      {children}
    </ReactMapGL>
  )
}

export default MapBox
