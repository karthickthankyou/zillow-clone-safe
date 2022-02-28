import { ReactElement, useState, useMemo, useContext } from 'react'
import { useTransition, animated, config } from 'react-spring'
import HomeIcon from '@heroicons/react/outline/HomeIcon'

import {
  useGetHomeByIdQuery,
  useSearchHomesByLocationQuery,
  SearchHomesByLocationQuery,
} from 'src/generated/graphql'
import { useAppSelector, useAppDispatch } from 'src/store'
import { Marker } from 'react-map-gl'
import RefreshIcon from '@heroicons/react/outline/RefreshIcon'
import {
  selectFilters,
  selectHighlightedHomeId,
  setHighlightedHomeId,
} from 'src/store/cities/citySlice'
import MapMarker from 'src/components/molecules/MapMarker'
import MapPopup from 'src/components/molecules/Popup'
import GlobeIcon from '@heroicons/react/outline/GlobeIcon'
import PlusIcon from '@heroicons/react/outline/PlusIcon'
import MinusIcon from '@heroicons/react/outline/MinusIcon'

import { MapContext } from 'src/components/organisms/Mapbox/Mapbox'

export const PanelContainer = ({
  children,
}: {
  children: ReactElement | ReactElement[]
}) => <div className='h-full'>{children}</div>

export const PanelChild = ({
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
    <div className={`absolute ${classes[position!]} ${className}`}>
      {children}
    </div>
  )
}

const Fetching = ({ fetching }: { fetching: boolean }) =>
  fetching ? <RefreshIcon className='w-10 h-10 animate-spin-reverse' /> : null

const Error = ({ error }: { error: any }) =>
  error ? (
    <div className='text-white bg-red-600 rounded-full'>
      Someting went wrong.
    </div>
  ) : null

const HomeMarkers = ({
  homes,
}: {
  homes: SearchHomesByLocationQuery['homes']
}) => {
  const markersTransitions = useTransition(homes || [], {
    keys: (home) => home.id,
    from: { opacity: 0, transform: 'translateY(-6px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-6px)' },
    trail: 50,
    config: config.molasses,
  })

  const dispatch = useAppDispatch()
  const highlightedHomeId = useAppSelector(selectHighlightedHomeId)

  const [highlightedHomeDetails] = useGetHomeByIdQuery({
    variables: {
      id: highlightedHomeId,
    },
  })

  return markersTransitions((style, marker) => (
    <>
      {highlightedHomeId === marker.id && (
        <MapPopup marker={marker} highlightedHome={highlightedHomeDetails} />
      )}
      <animated.div key={marker.id} style={style}>
        <MapMarker
          lat={marker.lat}
          lng={marker.lng}
          style={marker.style}
          highlighted={highlightedHomeId === marker.id}
          mouseHoverAction={() => dispatch(setHighlightedHomeId(marker.id))}
          mouseLeaveAction={() => dispatch(setHighlightedHomeId(null))}
        />
      </animated.div>
    </>
  ))
}

const CityMarkers = ({
  cities,
}: {
  cities: SearchHomesByLocationQuery['cities']
}) => {
  const [highlightedCityId, setHighlightedCityId] = useState<number | null>(
    null
  )

  const reorderedCities: SearchHomesByLocationQuery['cities'] = useMemo(() => {
    if (!highlightedCityId) return cities

    const item = cities.find((city) => city.id === highlightedCityId)
    return [...cities.filter((city) => city.id !== highlightedCityId), item!]
  }, [highlightedCityId, cities])

  const cityMarkersTransitions = useTransition(reorderedCities, {
    keys: (city) => city.id,
    from: { opacity: 0, transform: 'translateY(16px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(8px)' },
    trail: 100,
    config: config.wobbly,
  })

  const [_viewport, setViewport] = useContext(MapContext)

  return cityMarkersTransitions((style, marker) => (
    <animated.div
      key={marker.id}
      style={style}
      onClick={() => {
        setViewport({
          latitude: marker.lat,
          longitude: marker.lng,
          zoom: 10,
        })
      }}
    >
      <Marker latitude={marker.lat} longitude={marker.lng}>
        <div
          className='flex flex-col items-center justify-center p-3 text-white transition-all border-2 border-black rounded-full shadow-xl cursor-pointer group hover:scale-125 hover:bg-black shadow-gray-600 aspect-square bg-black/80'
          onMouseOver={() => {
            setHighlightedCityId(marker.id)
          }}
          onFocus={() => {
            setHighlightedCityId(marker.id)
          }}
        >
          {/* Very hard to get the order on hover. CSS does not seem to work.
          We can reorder the item which is so messy.
          https://stackoverflow.com/questions/69900689/react-map-gl-how-to-rise-map-marker-to-top-when-hover */}
          <div className='flex items-center justify-center'>
            {marker.propertiesCount}
            <HomeIcon className='w-5 h-5 ml-1' />
          </div>
          <div className='hidden text-xs text-white/60 group-hover:block'>
            {marker.displayName}
          </div>
        </div>
      </Marker>
    </animated.div>
  ))
}

export const ZoomControls = () => {
  const [_viewport, setViewport] = useContext(MapContext)
  return (
    <div className='flex flex-col border border-white divide-y divide-white rounded shadow-lg bg-white/50 backdrop-blur backdrop-filter'>
      <button
        className='rounded-none hover:bg-white'
        type='button'
        onClick={() => {
          setViewport((state) => ({
            ...state,
            zoom: state.zoom + 1,
          }))
        }}
      >
        <PlusIcon className='w-8 h-8 p-1.5 ' />
      </button>
      <button
        className='rounded-none hover:bg-white'
        type='button'
        onClick={() => {
          setViewport((state) => ({
            ...state,
            zoom: state.zoom - 1,
          }))
        }}
      >
        <MinusIcon className='w-8 h-8 p-1.5 ' />
      </button>
      <button
        className='rounded-none hover:bg-white'
        type='button'
        onClick={() => {
          setViewport({
            latitude: 39.0119,
            longitude: -98.4842,
            zoom: 3,
          })
        }}
      >
        <GlobeIcon className='w-8 h-8 p-1.5 ' />
      </button>
    </div>
  )
}

const MapboxContent = () => {
  /**
   * Query homes and create animated markers.
   */
  const filterVariables = useAppSelector(selectFilters)
  const [{ data: homesMap, fetching, error }] = useSearchHomesByLocationQuery({
    variables: filterVariables,
  })

  return (
    <>
      <HomeMarkers homes={homesMap?.homes || []} />
      <CityMarkers cities={homesMap?.cities || []} />
      <PanelContainer>
        <PanelChild position='center-bottom'>
          <Fetching fetching={fetching} />
          <Error error={error} />
        </PanelChild>
        <PanelChild position='left-top'>
          <ZoomControls />
        </PanelChild>
        <PanelChild position='right-center'>
          <ZoomControls />
        </PanelChild>
        <PanelChild position='right-bottom'>
          <div className='max-w-md mt-auto text-3xl font-bold leading-tight '>
            Biggest list of homes all over the world.
          </div>
        </PanelChild>
      </PanelContainer>
    </>
  )
}

export default MapboxContent
