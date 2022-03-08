import { ReactElement } from 'react'
import { useTransition, animated, config } from 'react-spring'
import HomeIcon from '@heroicons/react/outline/HomeIcon'
import MapPopup from 'src/components/molecules/Popup'

import {
  useGetHomeByIdQuery,
  useInsertUserHomeMutation,
} from 'src/generated/graphql'
import { useAppSelector, useAppDispatch } from 'src/store'
import { Marker } from 'react-map-gl'
import RefreshIcon from '@heroicons/react/outline/RefreshIcon'

import MapMarker from 'src/components/molecules/MapMarker'

import GlobeIcon from '@heroicons/react/outline/GlobeIcon'
import PlusIcon from '@heroicons/react/outline/PlusIcon'
import MinusIcon from '@heroicons/react/outline/MinusIcon'
import {
  useFetchHomesMap,
  useFetchCitiesMap,
  useFetchStatesMap,
} from 'src/store/home/homeNetwork'

import { resetMap, zoomIn, zoomOut, setViewport } from 'src/store/map/mapSlice'

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
} from 'src/store/home/homeSlice'
import { bringHighlightedItemToFront } from 'src/lib/util'
import { selectWishlistedHomes } from 'src/store/userHome/userHomeSlice'

export const PanelContainer = ({
  children,
}: {
  children: ReactElement | ReactElement[]
}) => <div className='h-full '>{children}</div>

export const Panel = ({
  children,
  className,
  position,
}: {
  children?: ReactElement | ReactElement[]
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
}) => {
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

export const Error = () => {
  const error = useAppSelector(selectMapError)
  return error ? (
    <div className='px-4 py-2 text-white bg-red-600 rounded-full shadow-xl'>
      Someting went wrong.
    </div>
  ) : null
}

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

  const highlightedHomeId = useAppSelector(selectHighlightedHomeId)
  const { data: wishlistedHomes } = useAppSelector(selectWishlistedHomes)

  const [highlightedHomeDetails] = useGetHomeByIdQuery({
    variables: {
      id: highlightedHomeId!,
    },
    pause: !highlightedHomeId,
  })

  const getWishlisted = (homeId: number) =>
    wishlistedHomes?.wishlisted.find(
      (wishlistedItem) => wishlistedItem.hId === homeId
    )

  return markersTransitions((style, marker) => (
    <>
      {highlightedHomeId === marker.id && (
        <MapPopup
          marker={marker}
          highlightedHomeData={highlightedHomeDetails}
          wishlisted={getWishlisted(marker.id)}
        />
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
  const ZOOM_LEVEL = 11

  const cityMarkersTransitions = useTransition(reorderedItems, {
    keys: (item) => item.id,
    from: { opacity: 0, transform: 'translateY(8px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(4px)' },
    trail: 10,
    config: config.wobbly,
  })

  return cityMarkersTransitions((style, marker) => (
    <animated.div
      key={marker.id}
      style={style}
      onClick={() => {
        dispatch(
          setViewport({
            latitude: marker.lat,
            longitude: marker.lng,
            zoom: ZOOM_LEVEL,
          })
        )
      }}
    >
      <Marker latitude={marker.lat} longitude={marker.lng} className='group'>
        <div
          className='flex flex-col items-center justify-center'
          onMouseOver={() => {
            dispatch(setHighlightedCityId(marker.id))
          }}
          onFocus={() => {
            dispatch(setHighlightedCityId(marker.id))
          }}
        >
          <div className='flex items-center justify-center px-2 py-1 text-white transition-all border border-black rounded-full shadow-md cursor-pointer shadow-black/50 hover:shadow-lg hover:shadow-black/50 group-hover:scale-125 group-hover:bg-black bg-black/70'>
            {marker.totalHomes}
            <HomeIcon className='w-5 h-5 ml-1' />
          </div>
        </div>

        <div className='absolute hidden p-1 mt-4 font-semibold text-center text-black -translate-x-1/2 rounded-md shadow-xl left-1/2 backdrop-blur backdrop-filter bg-gray-300/40 group-hover:block'>
          <div className='text-xs font-bold whitespace-nowrap'>{marker.id}</div>
          <div className='mt-1 text-xs font-light whitespace-nowrap'>
            Click to zoom in
          </div>
        </div>
      </Marker>
    </animated.div>
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
  const ZOOM_LEVEL = 7

  const cityMarkersTransitions = useTransition(reorderedItems, {
    keys: (item) => item.id,
    from: { opacity: 0, transform: 'translateY(24px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(12px)' },
    trail: 50,
    config: config.wobbly,
  })

  return cityMarkersTransitions((style, marker) => (
    <animated.div
      key={marker.id}
      style={style}
      onClick={() => {
        dispatch(
          setViewport({
            latitude: marker.lat,
            longitude: marker.lng,
            zoom: ZOOM_LEVEL,
          })
        )
      }}
    >
      <Marker latitude={marker.lat} longitude={marker.lng} className='group'>
        <div
          className='flex flex-col items-center justify-center'
          onMouseOver={() => {
            dispatch(setHighlightedStateId(marker.id))
          }}
          onFocus={() => {
            dispatch(setHighlightedStateId(marker.id))
          }}
        >
          <div className='flex items-center justify-center px-4 py-2 text-white transition-all border border-black rounded-full shadow-md cursor-pointer shadow-black/50 hover:shadow-lg hover:shadow-black/50 group-hover:scale-125 group-hover:bg-black bg-black/70'>
            {marker.totalHomes}
            <HomeIcon className='w-5 h-5 ml-1' />
          </div>
        </div>

        <div className='absolute hidden p-1 mt-4 font-semibold text-center text-black -translate-x-1/2 rounded-md shadow-xl left-1/2 backdrop-blur backdrop-filter bg-gray-300/40 group-hover:block'>
          <div className='text-xs font-bold whitespace-nowrap'>{marker.id}</div>
          <div className='mt-1 text-xs font-light whitespace-nowrap'>
            Click to zoom in
          </div>
        </div>
      </Marker>
    </animated.div>
  ))
}

export const ZoomControls = () => {
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
        onClick={() => dispatch(resetMap())}
      >
        <GlobeIcon className='w-8 h-8 p-1.5 ' />
      </button>
    </div>
  )
}

// export const ZoomMessage = ({
//   zoomLimit = 2,
//   children,
// }: {
//   zoomLimit?: number
//   children: Children
// }) => {
//   const zoomLevel = useAppSelector((state) => state.map.viewport.zoom)
//   const dispatch = useAppDispatch()
//   if (zoomLevel > zoomLimit) return null
//   return (
//     <button
//       type='button'
//       onClick={() => dispatch(resetMap())}
//       className='px-4 py-2 bg-white rounded-full shadow-2xl shadow-black/50'
//     >
//       {children}
//     </button>
//   )
// }

// export const NoHomesMessage = ({ children }: { children: Children }) => {
//   const homes = useAppSelector((state) => state.home.mapResults.data?.homes)
//   const homesShowing = useAppSelector((state) => state.map.show.homes)
//   if (homesShowing && !homes?.length) return children
//   return null
// }
