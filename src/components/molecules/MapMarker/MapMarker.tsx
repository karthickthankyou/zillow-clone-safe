import { Marker } from 'react-map-gl'
import HomeIcon from '@heroicons/react/solid/HomeIcon'
import OfficeBuildingIcon from '@heroicons/react/solid/OfficeBuildingIcon'

export interface IMapMarkerProps {
  lat: number
  lng: number
  style: string
  mouseHoverAction: () => void
  mouseLeaveAction: () => void
  highlighted?: boolean
}

const MapMarker = ({
  lat,
  lng,
  style,
  highlighted,
  mouseHoverAction,
  mouseLeaveAction,
}: IMapMarkerProps) => {
  let MarkerIcon = HomeIcon
  if (['Coop', 'Apartment'].includes(style)) MarkerIcon = OfficeBuildingIcon

  return (
    <Marker latitude={lat} longitude={lng}>
      <MarkerIcon
        onMouseOver={mouseHoverAction}
        onMouseLeave={mouseLeaveAction}
        className={`w-5 h-5 transition-all shadow-2xl cursor-pointer ease-in-out duration-200 relative ${
          highlighted
            ? 'text-primary-500 scale-150 opacity-100  border border-primary-500 rounded  '
            : 'text-primary-900 opacity-90'
        }`}
      />
    </Marker>
  )
}

export default MapMarker
