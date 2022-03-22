/* eslint-disable camelcase */
import { ReactElement } from 'react'
import { useTransition, animated, config } from 'react-spring'
import HomeIcon from '@heroicons/react/outline/HomeIcon'
import InformationCircleIcon from '@heroicons/react/outline/InformationCircleIcon'
import MapPopup from 'src/components/molecules/Popup'

import { useAppSelector, useAppDispatch } from 'src/store'
import { Marker } from 'react-map-gl'
import RefreshIcon from '@heroicons/react/outline/RefreshIcon'

import MapMarker from 'src/components/molecules/MapMarker'

import {
  useFetchHomesMap,
  useFetchCitiesMap,
  useFetchStatesMap,
} from 'src/store/home/homeNetwork'

import { setViewport, setViewportLocation } from 'src/store/map/mapSlice'

import {
  selectHighlightedHomeId,
  selectHighlightedCityId,
  setHighlightedCityId,
  selectHighlightedStateId,
  setHighlightedStateId,
  selectMapFetching,
  selectMapError,
  selectHomesMap,
  selectCitiesMap,
  selectStatesMap,
  setHighlightedHomeId,
} from 'src/store/home/homeSlice'
import { bringHighlightedItemToFront } from 'src/lib/util'
import { selectWishlistedHomes } from 'src/store/userHome/userHomeSlice'
import { startLongHoverDispatch, stopLongHoverDispatch } from 'src/hooks'
import { ZOOM_CITIES, ZOOM_HOMES, ZOOM_STATES } from 'src/store/static'
import { Children } from 'src/types'
import PopupHomesContent from '../PopupHomesContent'
import PopupRegionContent from '../PopupRegionContent'

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
    <div className='px-4 py-2 text-white bg-red-600 rounded-full shadow-xl'>
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
    <div className='px-4 py-2 text-white border border-red-600 rounded-full shadow-xl shadow-black/30 bg-red-600/60'>
      {error}
    </div>
  ) : null

export const HomeMarkers = () => {
  useFetchHomesMap()

  const homes = useAppSelector(selectHomesMap).data?.homes || []

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
    wishlistedHomes?.wishlisted.find(
      (wishlistedItem) => wishlistedItem.hId === homeId
    )

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

export const CityMarkers = () => {
  useFetchCitiesMap()
  const dispatch = useAppDispatch()

  const highlightedCityId = useAppSelector(selectHighlightedCityId)
  const items = useAppSelector(selectCitiesMap).data?.cities || []
  const reorderedItems = bringHighlightedItemToFront(
    highlightedCityId,
    items
  ) as typeof items

  const cityMarkersTransitions = useTransition(reorderedItems, {
    keys: (item) => item.id,
    from: { opacity: 0, transform: 'translateY(8px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(4px)' },
    trail: 10,
    config: config.wobbly,
  })

  return cityMarkersTransitions((style, marker) => (
    <>
      {highlightedCityId === marker.id && (
        <MapPopup
          latitude={marker.lat}
          longitude={marker.lng}
          onClose={() => dispatch(setHighlightedCityId(null))}
        >
          <PopupRegionContent
            id={marker.id}
            onClick={() => {
              dispatch(
                setViewport({
                  latitude: marker.lat,
                  longitude: marker.lng,
                  zoom: ZOOM_HOMES,
                })
              )
            }}
          />
        </MapPopup>
      )}
      <animated.div
        key={marker.id}
        style={style}
        onClick={() => {
          dispatch(
            setViewportLocation({
              latitude: marker.lat,
              longitude: marker.lng,
            })
          )
        }}
      >
        <Marker latitude={marker.lat} longitude={marker.lng} className='group'>
          <div
            className='flex flex-col items-center justify-center'
            onMouseOver={() => {
              startLongHoverDispatch(setHighlightedCityId(marker.id))
            }}
            onMouseLeave={() => {
              stopLongHoverDispatch()
            }}
            onFocus={() => {
              startLongHoverDispatch(setHighlightedCityId(marker.id))
            }}
          >
            <div className='flex items-center justify-center px-2 py-1 text-white transition-all border border-black rounded-full shadow-md cursor-pointer shadow-black/50 hover:shadow-lg hover:shadow-black/50 group-hover:scale-125 group-hover:bg-black bg-black/70'>
              {marker.totalHomes}
              <HomeIcon className='w-5 h-5 ml-1' />
            </div>
          </div>
        </Marker>
      </animated.div>
    </>
  ))
}

export const StateMarkers = () => {
  useFetchStatesMap()
  const dispatch = useAppDispatch()

  const highlightedStateId = useAppSelector(selectHighlightedStateId)
  const items = useAppSelector(selectStatesMap).data?.states || []
  const reorderedItems = bringHighlightedItemToFront(
    highlightedStateId,
    items
  ) as typeof items

  const stateMarkersTransitions = useTransition(reorderedItems, {
    keys: (item) => item.id,
    from: { opacity: 0, transform: 'translateY(24px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(12px)' },
    trail: 50,
    config: config.wobbly,
  })

  return stateMarkersTransitions((style, marker) => (
    <>
      {highlightedStateId === marker.id && (
        <MapPopup
          latitude={marker.lat}
          longitude={marker.lng}
          onClose={() => dispatch(setHighlightedStateId(null))}
        >
          <PopupRegionContent
            id={marker.id}
            onClick={() => {
              dispatch(
                setViewport({
                  latitude: marker.lat,
                  longitude: marker.lng,
                  zoom: ZOOM_CITIES,
                })
              )
            }}
          />
        </MapPopup>
      )}
      <animated.div
        key={marker.id}
        style={style}
        onClick={() => {
          dispatch(
            setViewport({
              latitude: marker.lat,
              longitude: marker.lng,
              zoom: ZOOM_STATES,
            })
          )
        }}
      >
        <Marker latitude={marker.lat} longitude={marker.lng}>
          <div
            className='flex flex-col items-center justify-center'
            onMouseOver={() => {
              startLongHoverDispatch(setHighlightedStateId(marker.id))
            }}
            onMouseLeave={() => {
              stopLongHoverDispatch()
            }}
            onFocus={() => {
              startLongHoverDispatch(setHighlightedStateId(marker.id))
            }}
          >
            <div
              className={`flex items-center justify-center px-4 py-2 text-white transition-all border border-black rounded-full shadow-md cursor-pointer shadow-black/50  bg-black/70 ${
                highlightedStateId === marker.id &&
                'hover:shadow-lg hover:shadow-black/50 hover:scale-125 hover:bg-black'
              }`}
            >
              {marker.totalHomes}
              <HomeIcon className='w-5 h-5 ml-1' />
            </div>
          </div>
        </Marker>
      </animated.div>
    </>
  ))
}
