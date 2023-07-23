import { Popup } from 'react-map-gl'

import XIcon from '@heroicons/react/outline/XIcon'
import { useKeypress } from 'src/hooks'
import { Viewport, Children } from 'src/types'

export type IPopupProps = {
  latitude: Viewport['latitude']
  longitude: Viewport['longitude']
  children: Children
  onClose: () => void
}

const PopupComponent = ({
  latitude,
  longitude,
  children,
  onClose,
}: IPopupProps) => {
  useKeypress('Escape', onClose)
  return (
    <Popup
      latitude={latitude}
      longitude={longitude}
      offset={10}
      closeButton={false}
    >
      <div className='grid grid-cols-1 grid-rows-1'>
        <div className='col-start-1 row-start-1 '>{children}</div>
        <div className='flex justify-end col-start-1 row-start-1 p-2 items-top'>
          <button
            type='button'
            className='absolute top-0 right-0 p-0.5 rounded-bl bg-black/30 hover:bg-black/40'
            onClick={onClose}
          >
            <XIcon className='w-5 h-5 text-white' />
          </button>
        </div>
      </div>
    </Popup>
  )
}

export default PopupComponent
