import { zoomIn, zoomOut, resetMap, setZoom } from 'src/store/map/mapSlice'
import GlobeIcon from '@heroicons/react/outline/GlobeIcon'
import PlusIcon from '@heroicons/react/outline/PlusIcon'
import MinusIcon from '@heroicons/react/outline/MinusIcon'
import MapIcon from '@heroicons/react/outline/MapIcon'
import { useAppSelector, useAppDispatch } from 'src/store'
import { ZOOM_CITIES } from 'src/store/static'

export interface IZoomControlsProps {}

const ZoomControls = () => {
  const zoomLevel = useAppSelector((state) => state.map.viewport.zoom)
  const dispatch = useAppDispatch()

  const zoomOutDisabled = zoomLevel < 3

  return (
    <div className='flex flex-col border border-white divide-y divide-white rounded shadow-lg bg-white/50 backdrop-blur backdrop-filter'>
      <button
        className='rounded-none hover:bg-white'
        type='button'
        onClick={() => dispatch(zoomIn())}
      >
        <PlusIcon className='w-8 h-8 p-1.5 ' />
      </button>
      <button
        className='rounded-none hover:bg-white disabled:opacity-50'
        type='button'
        disabled={zoomOutDisabled}
        onClick={() => dispatch(zoomOut())}
      >
        <MinusIcon className='w-8 h-8 p-1.5 ' />
      </button>
      <button
        className='rounded-none hover:bg-white'
        type='button'
        onClick={() => dispatch(setZoom(ZOOM_CITIES))}
      >
        <MapIcon className='w-8 h-8 p-1.5 ' />
      </button>
      <button
        className='rounded-none hover:bg-white'
        type='button'
        onClick={() => dispatch(resetMap())}
      >
        <GlobeIcon className='w-8 h-8 p-1.5 ' />
      </button>
    </div>
  )
}

export default ZoomControls
