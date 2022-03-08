import { Marker } from 'react-map-gl'
import HomeIcon from '@heroicons/react/solid/HomeIcon'
import OfficeBuildingIcon from '@heroicons/react/solid/OfficeBuildingIcon'
import {
  SearchHomesByLocationQuery,
  GetWishlistedHomesQuery,
} from 'src/generated/graphql'

export interface IMapMarkerProps {
  home: SearchHomesByLocationQuery['homes'][number]

  highlighted?: boolean
  setHighlighted: () => void
  removeHighlighted: () => void
  wishlisted?: GetWishlistedHomesQuery['wishlisted'][number]
}

const MapMarker = ({
  home,
  highlighted,
  setHighlighted,
  removeHighlighted,
  wishlisted,
}: IMapMarkerProps) => {
  let MarkerIcon = HomeIcon

  if (['Coop', 'Apartment'].includes(home.style))
    MarkerIcon = OfficeBuildingIcon

  const highlightedClasses =
    highlighted &&
    'text-primary-700 scale-150 opacity-100  border border-primary-700 rounded bg-white'

  const wishlistedClasses =
    wishlisted && 'text-red-600 fill-red-600 border-red-500 '

  return (
    <Marker latitude={home.lat} longitude={home.lng}>
      <MarkerIcon
        onMouseOver={setHighlighted}
        // onMouseLeave={removeHighlighted}
        className={`w-5 h-5 opacity-90  text-primary-900 transition-all shadow-2xl cursor-pointer ease-in-out duration-200 relative ${highlightedClasses} ${wishlistedClasses}`}
      />
    </Marker>
  )
}

export default MapMarker
