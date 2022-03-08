import { Marker } from 'react-map-gl'
import HomeIcon from '@heroicons/react/solid/HomeIcon'
import OfficeBuildingIcon from '@heroicons/react/solid/OfficeBuildingIcon'
import {
  SearchHomesByLocationQuery,
  GetWishlistedHomesQuery,
} from 'src/generated/graphql'
import { debouncedDispatch } from 'src/hooks'
import { setViewportLocation } from 'src/store/map/mapSlice'
import { setHighlightedHomeId } from 'src/store/home/homeSlice'
import { useAppDispatch } from 'src/store'

export interface IMapMarkerProps {
  home: SearchHomesByLocationQuery['homes'][number]
  highlighted?: boolean
  wishlisted?: GetWishlistedHomesQuery['wishlisted'][number]
}

const MapMarker = ({ home, highlighted, wishlisted }: IMapMarkerProps) => {
  let MarkerIcon = HomeIcon

  if (['Coop', 'Apartment'].includes(home.style))
    MarkerIcon = OfficeBuildingIcon

  const dispatch = useAppDispatch()

  const highlightedClasses =
    highlighted &&
    'text-primary-700 scale-150 opacity-100  border border-primary-700 rounded bg-white'

  const wishlistedClasses =
    wishlisted && 'text-red-600 fill-red-600 border-red-600 '

  return (
    <Marker latitude={home.lat} longitude={home.lng}>
      <MarkerIcon
        onMouseOver={() => debouncedDispatch(setHighlightedHomeId(home.id))}
        onTouchStart={() => debouncedDispatch(setHighlightedHomeId(home.id))}
        // onTouchEnd={() => console.log('Touch end')}
        // onTouchStart={() => console.log('Touched start')}
        onClick={() => {
          debouncedDispatch(
            setViewportLocation({
              latitude: home.lat,
              longitude: home.lng,
            })
          )
        }}
        // onMouseLeave={() => debouncedDispatch(setHighlightedHomeId(null))}
        className={`w-5 h-5 opacity-90  text-primary-900 transition-all shadow-2xl cursor-pointer ease-in-out duration-200 relative ${highlightedClasses} ${wishlistedClasses}`}
      />
    </Marker>
  )
}

export default MapMarker
