import React from 'react'
import {
  zoomIn,
  zoomOut,
  resetMap,
  setZoom,
  setViewport,
  setViewportLocation,
} from 'src/store/map/mapSlice'
import GlobeIcon from '@heroicons/react/outline/GlobeIcon'
import PlusIcon from '@heroicons/react/outline/PlusIcon'
import MinusIcon from '@heroicons/react/outline/MinusIcon'
import MapIcon from '@heroicons/react/outline/MapIcon'
import ArrowsExpandIcon from '@heroicons/react/outline/ArrowsExpandIcon'
import Pin from '@heroicons/react/outline/LocationMarkerIcon'
import { useAppDispatch } from 'src/store'
import { ZOOM_CITIES } from 'src/store/static'
import { Children, Viewport } from 'src/types'
import { PayloadAction } from '@reduxjs/toolkit'

export interface IZoomControlsProps {}

const ZoomControl = ({ children }: { children: Children }) => (
  <div className='flex flex-col border border-white divide-y divide-white rounded shadow-lg bg-white/50 backdrop-blur backdrop-filter'>
    {children}
  </div>
)

const ZoomIn = () => {
  const dispatch = useAppDispatch()
  return (
    <button
      className='rounded-none hover:bg-white '
      type='button'
      onClick={() => dispatch(zoomIn())}
    >
      <PlusIcon className='w-8 h-8 p-1.5 ' />
    </button>
  )
}
const ExpandIn = () => {
  const dispatch = useAppDispatch()
  return (
    <button
      className='rounded-none hover:bg-white '
      type='button'
      onClick={() => dispatch(setZoom(6))}
    >
      <ArrowsExpandIcon className='w-8 h-8 p-1.5 ' />
    </button>
  )
}

const ZoomOut = () => {
  const dispatch = useAppDispatch()
  return (
    <button
      className='rounded-none hover:bg-white '
      type='button'
      onClick={() => dispatch(zoomOut())}
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
  const dispatch = useAppDispatch()
  return (
    <button
      className='rounded-none hover:bg-white'
      type='button'
      onClick={() => dispatch(setZoom(ZOOM_CITIES))}
    >
      <MapIcon className='w-8 h-8 p-1.5 ' />
    </button>
  )
}
const GotoMarker = ({ viewport }: { viewport: Omit<Viewport, 'zoom'> }) => {
  const dispatch = useAppDispatch()
  return (
    <button
      className='rounded-none hover:bg-white'
      type='button'
      onClick={() => dispatch(setViewportLocation(viewport))}
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

ZoomControl.ZoomIn = ZoomIn
ZoomControl.ZoomOut = ZoomOut
ZoomControl.ResetMap = ResetMap
ZoomControl.ZoomCities = ZoomCities
ZoomControl.GotoMarker = GotoMarker
ZoomControl.ExpandIn = ExpandIn
ZoomControl.MapControl = MapControl

export default ZoomControl

export const DefaultZoomControls = () => (
  <ZoomControl>
    <ZoomIn />
    <ZoomOut />
    <ZoomCities />
    <ResetMap />
  </ZoomControl>
)
