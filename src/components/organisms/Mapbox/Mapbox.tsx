import React, { useState } from 'react'
import ReactMapGL, { NavigationControl, MapRef } from 'react-map-gl'
import MapPopup from 'src/components/molecules/Popup'
import MapMarker from 'src/components/molecules/MapMarker'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useTransition, animated } from 'react-spring'
import RefreshIcon from '@heroicons/react/outline/RefreshIcon'

import { useAppDispatch } from 'src/store'
import { setMapLocation } from 'src/store/cities/citySlice'

// import { useFetchHomes } from 'src/store/streams'
import { useHomesMap } from 'src/store/homes/homeHooks'
import mapStyle from './mapLight.json'

const accessToken =
  'pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ'

export type MapLocation = {
  longitude: number
  latitude: number
  zoom: number
  height: number
  width: number
  ne: [number, number]
  sw: [number, number]
}

export type MarkerType = { id: string; lat: number; lng: number }[]

// export interface IMapBoxProps {
//   className?: string
// }

const MapBox = () => {
  /**
   * Responsibilities
   *
   * 1. Manage map location locally to avoid updating redux store multiple times a second! Someone can listen to that day else where in the application.
   * 2. Send map location to redux store when user interaction stops.
   * 2. Fetch data using useHomesMap
   *
   *  */

  // Local state
  const [viewport, setViewPort] = useState({
    longitude: -74.006,
    latitude: 40.7128,
    zoom: 12,
  })

  const ref = React.useRef<MapRef | null>(null)

  const dispatch = useAppDispatch()

  // useFetchHomes()

  const { data, fetching } = useHomesMap()

  const highlightedHome = { data: { id: 88 } }

  const markersTransitions = useTransition(data?.homes, {
    keys: (home) => home?.id || '3',
    from: { opacity: 0, transform: 'translateY(-6px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-6px)' },
    config: {
      duration: 200,
    },
    trail: 100,
  })

  return (
    <div className='relative w-full h-screen'>
      <ReactMapGL
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...viewport}
        onViewportChange={(v) => {
          setViewPort(v)
        }}
        dragPan
        scrollZoom={false}
        width='100%'
        height='100%'
        ref={(el) => {
          ref.current = el
        }}
        // pitch={45}
        mapboxApiAccessToken={accessToken}
        mapStyle={mapStyle}
        onInteractionStateChange={(state) => {
          if (!state.isDragging) {
            const mapbounds = ref.current?.getMap().getBounds().toArray()
            const { longitude, latitude, zoom } = viewport

            dispatch(
              setMapLocation({
                lng: longitude,
                lat: latitude,
                zoom,
                bounds: mapbounds,
              })
            )
          }
        }}
      >
        <NavigationControl showCompass={false} className='z-30 p-2 ' />
        {fetching && (
          <div className='absolute top-0 right-0 flex justify-end w-10 h-10 p-2 text-gray-700 '>
            <RefreshIcon className='w-full h-full transform rotate-180 animate-spin' />
          </div>
        )}
        {!fetching && data?.homes.length === 0 && (
          <div className='absolute top-0 right-0 flex justify-end p-2 text-gray-700 '>
            <div>No properties found.</div>
          </div>
        )}
        {markersTransitions((style, marker) => (
          <>
            {highlightedHome?.data?.id === marker?.id && (
              <MapPopup marker={marker} highlightedHome={highlightedHome} />
            )}
            <animated.div key={marker?.id} style={style}>
              {/* FIX */}
              <MapMarker
                lat={marker?.lat || 0}
                lng={marker?.lng || 0}
                highlighted={highlightedHome?.data?.id === marker?.id}
                mouseHoverAction={() =>
                  dispatch({
                    type: 'SET_HIGHLIGHTED_ID',
                    payload: marker?.id,
                  })
                }
                mouseLeaveAction={() =>
                  dispatch({
                    type: 'SET_HIGHLIGHTED_ID',
                    payload: null,
                  })
                }
              />
            </animated.div>
          </>
        ))}
      </ReactMapGL>
    </div>
  )
}

export default MapBox
