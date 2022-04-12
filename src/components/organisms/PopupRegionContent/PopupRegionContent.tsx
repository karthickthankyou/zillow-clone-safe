/* eslint-disable camelcase */
import Image from 'src/components/atoms/Image'
import { useGetHighlightedRegionData } from 'src/store/home/homeNetwork'
import HomeIcon from '@heroicons/react/solid/HomeIcon'

type BedsPriceType = {
  beds: string
  avg: number
  count: number
}

export interface IPopupRegionContentProps {
  id: string
  onClick: () => void
}

const Skeleton = () => (
  <div className='flex flex-col w-56 text-gray-200 '>
    <Image
      src='https://via.placeholder.com/150'
      className='w-full h-36'
      alt=''
    />
    <div className='flex flex-col p-2 bg-white/90 backdrop-filter backdrop-blur-sm filter'>
      <div className='w-full h-8 mb-1 font-semibold leading-none bg-gray-200 animate-pulse' />
      <div className='w-1/3 h-4 mb-1' />
      <div className='w-full h-6 mb-1 bg-gray-200 animate-pulse' />
      <div className='w-full h-6 mb-1 bg-gray-200 animate-pulse' />
      <div className='w-full h-6 mb-1 bg-gray-200 animate-pulse' />
      <div className='w-full h-6 mb-1 bg-gray-200 animate-pulse' />
    </div>
  </div>
)
export const ErrorSkeleton = ({ error }: { error: string }) => (
  <div className='flex flex-col w-56 text-gray-800 '>
    <Image
      src='https://via.placeholder.com/150'
      className='w-full h-36'
      alt=''
    />
    <div className='flex flex-col items-center justify-center p-2 bg-white/90'>
      <div>{error}</div>
    </div>
  </div>
)

const PopupRegionContent = ({ id, onClick }: IPopupRegionContentProps) => {
  const highlightedRegionDetails = useGetHighlightedRegionData(id)
  const { data, fetching, error } = highlightedRegionDetails!

  if (fetching) return <Skeleton />
  if (error) return <ErrorSkeleton error='Something went wrong...' />

  return (
    <div
      role='button'
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
      className='flex flex-col w-56 cursor-pointer '
    >
      <div className='relative h-36'>
        <Image
          src='https://via.placeholder.com/150'
          className='h-full'
          alt=''
        />
      </div>
      <div className='relative flex flex-col bg-white/50 backdrop-filter backdrop-blur-sm filter'>
        <div className='flex items-baseline justify-between p-2'>
          <div className='text-2xl font-light'>
            {data?.location_stats_by_pk?.id}
          </div>
          <div className='flex items-center p-2 ml-4 rounded bg-primary-50'>
            {data?.location_stats_by_pk?.totalHomes}
            <HomeIcon className='inline w-4 h-4' />
          </div>
        </div>

        <div className='p-2 divide-y bg-gray-50'>
          {data?.location_stats_by_pk?.bedsPrice.map((item: BedsPriceType) => (
            <div key={item.beds} className='flex py-1 text-sm'>
              <div className='w-10 text-gray-500'>bd {item.beds}</div>
              <div className='ml-2 font-mono'>
                ${item.avg.toLocaleString() || '-'}
              </div>
              <div className='flex items-center ml-auto mr-2'>
                {item.count}
                <HomeIcon className='inline w-4 h-4' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopupRegionContent
