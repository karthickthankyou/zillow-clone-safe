import React from 'react'
import { resetMap } from 'src/store/map/mapSlice'
import GlobeIcon from '@heroicons/react/outline/GlobeIcon'
import PlusIcon from '@heroicons/react/outline/PlusIcon'
import MinusIcon from '@heroicons/react/outline/MinusIcon'
import MapIcon from '@heroicons/react/outline/MapIcon'
import ArrowsExpandIcon from '@heroicons/react/outline/ArrowsExpandIcon'
import Pin from '@heroicons/react/outline/LocationMarkerIcon'
import { useAppDispatch } from 'src/store'
import { Children, Viewport } from 'src/types'
import { PayloadAction } from '@reduxjs/toolkit'
import { useMap } from 'react-map-gl'

export interface IZoomControlsProps {}

const MapControls = ({ children }: { children: Children }) => (
  <div className='flex flex-col border border-white divide-y divide-white rounded shadow-lg bg-white/50 backdrop-blur backdrop-filter'>
    {children}
  </div>
)

const ZoomIn = () => {
  const { current: map } = useMap()
  return (
    <button
      className='rounded-none hover:bg-white '
      type='button'
      onClick={() => map?.zoomIn()}
    >
      <PlusIcon className='w-8 h-8 p-1.5 ' />
    </button>
  )
}
const ExpandIn = () => {
  const { current: map } = useMap()
  return (
    <button
      className='rounded-none hover:bg-white '
      type='button'
      onClick={() => map?.zoomTo(6)}
    >
      <ArrowsExpandIcon className='w-8 h-8 p-1.5 ' />
    </button>
  )
}

const ZoomOut = () => {
  const { current: map } = useMap()
  return (
    <button
      className='rounded-none hover:bg-white '
      type='button'
      onClick={() => map?.zoomOut()}
    >
      <MinusIcon className='w-8 h-8 p-1.5 ' />
    </button>
  )
}

const ResetMap = () => {
  const dispatch = useAppDispatch()
  return (
    <button
      className='rounded-none hover:bg-white'
      type='button'
      onClick={() => dispatch(resetMap())}
    >
      <GlobeIcon className='w-8 h-8 p-1.5 ' />
    </button>
  )
}

const ZoomCities = () => {
  const { current: map } = useMap()
  return (
    <button
      className='rounded-none hover:bg-white'
      type='button'
      onClick={() => map?.zoomTo(8)}
    >
      <MapIcon className='w-8 h-8 p-1.5 ' />
    </button>
  )
}
const GotoMarker = ({ viewport }: { viewport: Omit<Viewport, 'zoom'> }) => {
  const { current: map } = useMap()

  return (
    <button
      className='rounded-none hover:bg-white'
      type='button'
      onClick={() => {
        const { latitude, longitude } = viewport
        map?.jumpTo({ center: [latitude, longitude] })
      }}
    >
      <Pin className='w-8 h-8 p-1.5 ' />
    </button>
  )
}

export const MapControl = ({
  action,
  Icon,
}: {
  action: PayloadAction<any>
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}) => {
  const dispatch = useAppDispatch()
  return (
    <button
      className='rounded-none hover:bg-white'
      type='button'
      onClick={() => dispatch(action)}
    >
      <Icon className='w-8 h-8 p-1.5 ' />
    </button>
  )
}
export const MapControlAction = ({
  action,
  Icon,
}: {
  action: Function
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}) => (
  <button
    className='rounded-none hover:bg-white'
    type='button'
    onClick={() => action()}
  >
    <Icon className='w-8 h-8 p-1.5 ' />
  </button>
)

MapControls.ZoomIn = ZoomIn
MapControls.ZoomOut = ZoomOut
MapControls.ResetMap = ResetMap
MapControls.ZoomCities = ZoomCities
MapControls.GotoMarker = GotoMarker
MapControls.ExpandIn = ExpandIn
MapControls.MapControl = MapControl

export default MapControls

export const DefaultZoomControls = () => (
  <MapControls>
    <ZoomIn />
    <ZoomOut />
    <ZoomCities />
    <ResetMap />
  </MapControls>
)
