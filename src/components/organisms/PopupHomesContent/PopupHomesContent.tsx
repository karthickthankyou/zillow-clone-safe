/* eslint-disable camelcase */
import {
  User_Homes_Types_Enum,
  useInsertUserHomeMutation,
} from 'src/generated/graphql'
import Image from 'src/components/atoms/Image'
import { useGetHighlightedHomeData } from 'src/store/home/homeNetwork'
import HeartIconReg from '@heroicons/react/outline/HeartIcon'
import HeartIconSolid from '@heroicons/react/solid/HeartIcon'
import { useAppSelector } from 'src/store'
import { selectUid } from 'src/store/user/userSlice'
import Link from 'src/components/atoms/Link'

export interface IPopupHomesContentProps {
  id: number
  wishlisted: boolean
}

const Skeleton = () => (
  <div className='flex flex-col w-48 text-gray-200 '>
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

export const PopupHomesContent = ({
  id,
  wishlisted,
}: IPopupHomesContentProps) => {
  const highlightedHomeDetails = useGetHighlightedHomeData(id)
  const { data, fetching, error } = highlightedHomeDetails!
  const [{ fetching: wishlistLoading }, updateHomeMutation] =
    useInsertUserHomeMutation()
  const uid = useAppSelector(selectUid)

  if (fetching) return <Skeleton />
  if (error) return <div>{error.message}</div>

  return (
    <div className='flex flex-col w-48 '>
      <div className='relative h-36'>
        <Image
          src='https://via.placeholder.com/150'
          className='h-full'
          alt=''
        />
      </div>
      <div className='relative flex flex-col bg-white/50 backdrop-filter backdrop-blur-sm filter'>
        <div className='p-2'>
          <div className='flex items-baseline justify-between'>
            <div className='mb-1 text-2xl font-light leading-none'>
              ${data?.homes_by_pk?.price.toLocaleString()}
            </div>
            <button
              type='button'
              onClick={() => {
                const hId = id
                if (!hId || !uid) return
                updateHomeMutation({
                  hId,
                  type: wishlisted
                    ? User_Homes_Types_Enum.RemovedFromWishlist
                    : User_Homes_Types_Enum.Wishlisted,
                  uid,
                })
              }}
            >
              {!wishlisted ? (
                <HeartIconReg className='w-6 h-6 text-red-600 hover:fill-red-100' />
              ) : (
                <HeartIconSolid className='w-6 h-6 fill-red-600' />
              )}
            </button>
          </div>
          <div className='flex flex-wrap mt-2 text-sm'>
            <div className='text-sm '>
              {data?.homes_by_pk?.sqft.toLocaleString()} sqft
            </div>
            <span className='mx-1 text-gray-300'>•</span>
            <div>{data?.homes_by_pk?.beds} bd</div>
            <span className='mx-1 text-gray-300'>•</span>
            <div>{data?.homes_by_pk?.bath} ba</div>
            <span className='mx-1 text-gray-300'>•</span>
            <div>{data?.homes_by_pk?.style}</div>
          </div>
        </div>
        <div className='p-2 text-xs bg-gray-50 line-clamp-2'>
          {data?.homes_by_pk?.address}
        </div>
      </div>
    </div>
  )
}

export default PopupHomesContent
