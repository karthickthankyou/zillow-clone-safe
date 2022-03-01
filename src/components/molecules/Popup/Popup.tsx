import {
  SearchHomesByLocationQuery,
  GetHomeByIdQuery,
} from 'src/generated/graphql'
import { Popup } from 'react-map-gl'
import { UseQueryState } from 'urql/dist/types/hooks/useQuery'
import Image from 'src/components/atoms/Image'

export interface IPopupProps {
  marker: SearchHomesByLocationQuery['homes'][number]
  highlightedHome?: UseQueryState<GetHomeByIdQuery, object>
}

const RenderData = ({ data }: { data: GetHomeByIdQuery }) => (
  <div className='flex flex-col '>
    <Image src='https://via.placeholder.com/150' className='w-48 h-36' alt='' />
    <div className='flex flex-col p-2 bg-white/50 backdrop-filter backdrop-blur-sm filter'>
      <div className='mb-1 text-lg font-semibold leading-none'>
        ${data?.homes_by_pk?.price.toLocaleString()}
      </div>
      <div className='text-sm text-gray-600'>
        {data?.homes_by_pk?.sqft} sqft
      </div>
      <div className='flex gap-2 text-sm text-gray-600'>
        <div>{data?.homes_by_pk?.beds} bd</div>
        <div>{data?.homes_by_pk?.bath} ba</div>
      </div>
    </div>
  </div>
)
const Skeleton = () => (
  <div className='flex flex-col text-gray-200'>
    <Image src='https://via.placeholder.com/150' className='w-48 h-36' alt='' />
    <div className='flex flex-col p-2 bg-white/90 backdrop-filter backdrop-blur-sm filter'>
      <div className='w-3/4 mb-1 text-lg font-semibold leading-none bg-gray-200 animate-pulse'>
        -
      </div>
      <div className='w-1/3 mb-1 text-xs bg-gray-200 animate-pulse'>-</div>
      <div className='flex w-1/2 gap-2 text-sm bg-gray-200 animate-pulse'>
        -
      </div>
    </div>
  </div>
)

const PopupComponent = ({ marker, highlightedHome }: IPopupProps) => {
  const { data, fetching, error } = highlightedHome!
  return (
    <Popup
      latitude={marker.lat}
      longitude={marker.lng}
      sortByDepth
      closeButton={false}
      offsetLeft={10}
      offsetTop={-10}
      dynamicPosition={false}
    >
      {/* eslint-disable-next-line no-nested-ternary */}
      {fetching ? (
        <Skeleton />
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <RenderData data={data!} />
      )}
    </Popup>
  )
}
export default PopupComponent
