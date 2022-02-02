import { SearchHomesByLocationQuery } from 'src/generated/graphql'
import { Popup } from 'react-map-gl'
import { IMapBoxProps } from 'src/components/organisms/Mapbox/Mapbox'

export interface IPopupProps {
  marker?: SearchHomesByLocationQuery['homes'][number]
  highlightedHome?: IMapBoxProps['highlightedHome']
}

const PopupComponent = ({ marker, highlightedHome }: IPopupProps) => (
  <Popup
    latitude={marker?.lat || 0}
    longitude={marker?.lng || 0}
    sortByDepth
    closeButton={false}
    offsetLeft={10}
    offsetTop={-10}
  >
    <div className='flex flex-col '>
      <img
        src='https://via.placeholder.com/150'
        className='w-36 h-36 aspect-square'
        alt=''
      />
      <div className='flex flex-col p-2 bg-white/90 backdrop-filter backdrop-blur-sm filter'>
        <div className='mb-1 text-lg font-semibold leading-none'>
          ${highlightedHome?.data?.price.toLocaleString()}
        </div>
        <div className='text-sm text-gray-600'>
          {highlightedHome?.data?.sqft} sqft
        </div>
        <div className='flex gap-2 text-sm text-gray-600'>
          <div>{highlightedHome?.data?.beds} bd</div>
          <div>{highlightedHome?.data?.bath} ba</div>
        </div>
      </div>
    </div>
  </Popup>
)

export default PopupComponent
