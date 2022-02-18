import { useTransition, animated } from 'react-spring'

import { useSearchHomesByLocationQuery } from 'src/generated/graphql'
import { useAppSelector, useAppDispatch } from 'src/store'
import { NavigationControl } from 'react-map-gl'
import RefreshIcon from '@heroicons/react/outline/RefreshIcon'
import {
  selectFilters,
  selectHighlightedHome,
  setHighlightedHomeId,
} from 'src/store/cities/citySlice'
import MapMarker from 'src/components/molecules/MapMarker'
import MapPopup from 'src/components/molecules/Popup'

export interface IMapboxContentProps {}

const MapboxContent = () => {
  const dispatch = useAppDispatch()
  /**
   * Query homes and create animated markers.
   */
  const whereCondition = useAppSelector(selectFilters)
  const [{ data: homesMap, fetching, error }] = useSearchHomesByLocationQuery({
    variables: {
      where: whereCondition,
    },
  })

  console.log('map data: ', homesMap, fetching)

  const markersTransitions = useTransition(homesMap?.homes, {
    keys: (home) => home?.id || 2,
    from: { opacity: 0, transform: 'translateY(-6px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-6px)' },
    trail: 100,
  })

  const highlightedHome = useAppSelector(selectHighlightedHome)
  return (
    <>
      <NavigationControl showCompass={false} className='z-30 p-2 ' />
      {fetching && (
        <div className='absolute top-0 right-0 flex justify-end w-10 h-10 p-2 text-gray-700 '>
          <RefreshIcon className='w-full h-full animate-spin-reverse' />
        </div>
      )}
      {error && (
        <div className='absolute top-0 right-0 flex justify-end w-full h-10 p-2 text-red-700 bg-red-200/50 '>
          Someting went wrong.
        </div>
      )}
      {markersTransitions((style, marker) => (
        <>
          {highlightedHome === marker?.id && (
            <MapPopup marker={marker} highlightedHome={highlightedHome} />
          )}
          <animated.div key={marker?.id} style={style}>
            {/* FIX */}
            <MapMarker
              lat={marker?.lat || 0}
              lng={marker?.lng || 0}
              highlighted={highlightedHome === marker?.id}
              mouseHoverAction={() =>
                dispatch(setHighlightedHomeId(marker?.id))
              }
              mouseLeaveAction={() => dispatch(setHighlightedHomeId(null))}
            />
          </animated.div>
        </>
      ))}
    </>
  )
}

export default MapboxContent
