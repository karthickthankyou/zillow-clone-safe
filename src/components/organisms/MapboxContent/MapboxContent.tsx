import { useTransition, animated, config } from 'react-spring'
import InformationCircleIcon from '@heroicons/react/outline/InformationCircleIcon'
import MapPopup from 'src/components/molecules/Popup'

import { useAppSelector, useAppDispatch } from 'src/store'

import RefreshIcon from '@heroicons/react/outline/RefreshIcon'

import MapMarker from 'src/components/molecules/MapMarker'

import { useFetchHomesMap } from 'src/store/home/homeNetwork'

import {
  selectHighlightedHomeId,
  selectMapFetching,
  selectMapError,
  selectHomesMap,
  setHighlightedHomeId,
} from 'src/store/home/homeSlice'
import { selectWishlistedHomes } from 'src/store/userHome/userHomeSlice'
import { Children } from 'src/types'
import PopupHomesContent from '../PopupHomesContent'

export const PanelContainer = ({ children }: { children: Children }) => (
  <div className='h-full '>{children}</div>
)

export type MapPanelTypes = {
  children?: Children
  className?: string
  position?:
    | 'left-top'
    | 'left-center'
    | 'left-bottom'
    | 'center-bottom'
    | 'right-bottom'
    | 'right-center'
    | 'right-top'
    | 'center-top'
    | 'center-center'
}

export const Panel = ({ children, className, position }: MapPanelTypes) => {
  const classes = {
    'left-top': 'top-0 left-0 flex flex-col items-start',
    'left-center': 'top-1/2 -translate-y-1/2 left-0 flex flex-col items-start',
    'left-bottom': 'bottom-0 left-0 flex flex-col items-start',
    'center-bottom':
      'bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center',
    'right-bottom': 'bottom-0 right-0 flex flex-col items-end text-right',
    'right-center':
      'top-1/2 -translate-y-1/2 right-0 flex flex-col items-end text-right',
    'right-top': 'top-0 right-0 flex flex-col items-end text-right',
    'center-top':
      'top-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center',
    'center-center':
      'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center',
  }
  return (
    <div
      className={`absolute space-y-2 p-4 ${classes[position!]} ${className}`}
    >
      {children}
    </div>
  )
}

export const Fetching = () => {
  const fetching = useAppSelector(selectMapFetching)
  return fetching ? (
    <div className='p-1 text-white border border-black rounded-full shadow-xl bg-black/80'>
      <RefreshIcon className='w-8 h-8 animate-spin-reverse' />
    </div>
  ) : null
}
export const FetchingBool = ({ fetching }: { fetching: boolean }) =>
  fetching ? (
    <div className='p-1 text-white border border-black rounded-full shadow-xl bg-black/80'>
      <RefreshIcon className='w-8 h-8 animate-spin-reverse' />
    </div>
  ) : null

export const Error = () => {
  const error = useAppSelector(selectMapError)
  return error ? (
    <div className='px-4 py-2 text-white rounded-full shadow-xl bg-red'>
      Someting went wrong.
    </div>
  ) : null
}

export const MapMessage = ({ message }: { message: string | null }) =>
  message ? (
    <div className='flex items-center px-4 py-2 text-sm text-white bg-gray-600 rounded-full shadow-lg'>
      <InformationCircleIcon className='p-1 w-7 h-7' /> <div>{message}</div>
    </div>
  ) : null

export const ErrorBool = ({ error }: { error: string | null }) =>
  error ? (
    <div className='px-4 py-2 text-white border rounded-full shadow-xl border-red shadow-black/30 bg-red/60'>
      {error}
    </div>
  ) : null

export const HomeMarkers = () => {
  useFetchHomesMap()

  const homes = useAppSelector(selectHomesMap).data?.properties || []

  const dispatch = useAppDispatch()

  const markersTransitions = useTransition(homes || [], {
    keys: (home) => home.id,
    from: { opacity: 0, transform: 'translateY(-6px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    // leave: { opacity: 0 },
    // trail: 50,
    config: config.molasses,
  })

  const { data: wishlistedHomes } = useAppSelector(selectWishlistedHomes)

  const getWishlisted = (homeId: number) =>
    wishlistedHomes?.wishlisted.find((item) => item.propertyId === homeId)

  const highlightedHomeId = useAppSelector(selectHighlightedHomeId)

  return markersTransitions((style, marker) => (
    <>
      {highlightedHomeId === marker.id && (
        <MapPopup
          latitude={marker.lat}
          longitude={marker.lng}
          onClose={() => dispatch(setHighlightedHomeId(null))}
        >
          <PopupHomesContent
            id={marker.id}
            wishlisted={!!getWishlisted(marker.id)}
          />
        </MapPopup>
      )}
      <animated.div key={marker.id} style={style}>
        <MapMarker
          home={marker}
          highlighted={highlightedHomeId === marker.id}
          wishlisted={getWishlisted(marker.id)}
        />
      </animated.div>
    </>
  ))
}
