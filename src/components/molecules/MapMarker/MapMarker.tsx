import { Marker } from 'react-map-gl'
import HomeIcon from '@heroicons/react/solid/HomeIcon'

export interface IMapMarkerProps {
  lat: number
  lng: number
  mouseHoverAction: () => void
  mouseLeaveAction: () => void
  highlighted?: boolean
}

const MapMarker = ({
  lat,
  lng,
  highlighted,
  mouseHoverAction,
  mouseLeaveAction,
}: IMapMarkerProps) => (
  <Marker latitude={lat} longitude={lng}>
    <HomeIcon
      onMouseOver={mouseHoverAction}
      onMouseLeave={mouseLeaveAction}
      className={`w-5 h-5 transition-all shadow-2xl cursor-pointer ease-in-out duration-500 relative ${
        highlighted
          ? 'text-primary-500 scale-150 opacity-100  border border-primary-500 rounded  '
          : 'text-primary-900 opacity-70'
      }`}
    />
  </Marker>
)

export default MapMarker
