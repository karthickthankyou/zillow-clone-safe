import {
  SearchHomesByLocationQuery,
  GetHomeByIdQuery,
} from 'src/generated/graphql'
import { Popup } from 'react-map-gl'
import { UseQueryState } from 'urql/dist/types/hooks/useQuery'

export interface IPopupProps {
  marker?: SearchHomesByLocationQuery['homes'][number]
  highlightedHome?: UseQueryState<GetHomeByIdQuery, object>
}

const PopupComponent = ({ marker, highlightedHome }: IPopupProps) => (
  <Popup
    latitude={marker?.lat || 0}
    longitude={marker?.lng || 0}
    sortByDepth
    closeButton={false}
    offsetLeft={10}
    offsetTop={-10}
    dynamicPosition={false}
  >
    <div className='flex flex-col '>
      <img src='https://via.placeholder.com/150' className='w-48 h-36' alt='' />
      <div className='flex flex-col p-2 bg-white/90 backdrop-filter backdrop-blur-sm filter'>
        <div className='mb-1 text-lg font-semibold leading-none'>
          ${highlightedHome?.data?.homes_by_pk?.price.toLocaleString()}
        </div>
        <div className='text-sm text-gray-600'>
          {highlightedHome?.data?.homes_by_pk?.sqft} sqft
        </div>
        <div className='flex gap-2 text-sm text-gray-600'>
          <div>{highlightedHome?.data?.homes_by_pk?.beds} bd</div>
          <div>{highlightedHome?.data?.homes_by_pk?.bath} ba</div>
        </div>
      </div>
    </div>
  </Popup>
)

export default PopupComponent
