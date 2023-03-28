import { Marker } from 'react-map-gl'
import HomeIcon from '@heroicons/react/solid/HomeIcon'
import OfficeBuildingIcon from '@heroicons/react/solid/OfficeBuildingIcon'
import { SearchPropertiesQuery, UserHomesQuery } from 'src/generated/graphql'
import { startLongHoverDispatch, stopLongHoverDispatch } from 'src/hooks'

import { setHighlightedHomeId } from 'src/store/home/homeSlice'
import { useRouter } from 'next/router'

export interface IMapMarkerProps {
  home: SearchPropertiesQuery['properties'][0]
  highlighted?: boolean
  wishlisted?: UserHomesQuery['userHomes'][0]
}

const MapMarker = ({ home, highlighted, wishlisted }: IMapMarkerProps) => {
  let MarkerIcon = HomeIcon

  if (['Coop', 'Apartment'].includes(home?.style || ''))
    MarkerIcon = OfficeBuildingIcon

  const highlightedClasses =
    highlighted &&
    'fill-primary scale-110  opacity-100  border border-primary  bg-white'

  const wishlistedClasses =
    wishlisted && 'text-red fill-red border-red scale-110  '

  const router = useRouter()

  return (
    <Marker latitude={home.lat} longitude={home.lng}>
      <MarkerIcon
        onMouseOver={() =>
          startLongHoverDispatch(setHighlightedHomeId(home.id))
        }
        onTouchStart={() =>
          startLongHoverDispatch(setHighlightedHomeId(home.id))
        }
        onMouseOut={() => stopLongHoverDispatch()}
        // onTouchEnd={() => console.log('Touch end')}
        // onTouchStart={() => console.log('Touched start')}
        onClick={() => {
          router.push(`/homes/${home.id}`)
        }}
        // onMouseLeave={() => debouncedDispatch(setHighlightedHomeId(null))}
        className={`w-5 h-5 opacity-90  text-primary-900 transition-all shadow-2xl cursor-pointer ease-in-out duration-200 rounded relative ${highlightedClasses} ${wishlistedClasses}`}
      />
    </Marker>
  )
}

export default MapMarker
