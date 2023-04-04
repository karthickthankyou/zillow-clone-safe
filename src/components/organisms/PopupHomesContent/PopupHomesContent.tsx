import {
  SearchPropertiesDocument,
  UserHomeType,
  useCreateUserHomeMutation,
} from 'src/generated/graphql'
import Image from 'src/components/atoms/Image'
import { useGetHighlightedHomeData } from 'src/store/home/homeNetwork'
import HeartIconReg from '@heroicons/react/outline/HeartIcon'
import HeartIconSolid from '@heroicons/react/solid/HeartIcon'
import RefreshIcon from '@heroicons/react/outline/RefreshIcon'
import { useAppSelector } from 'src/store'
import { selectUid } from 'src/store/user/userSlice'
import Link from 'src/components/atoms/Link'
import Skeleton from 'src/components/molecules/Skeleton'
import { loginNotification } from 'src/lib/util'

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

export interface IPopupHomesContentProps {
  id: number
  wishlisted: boolean
}

const HomeContentSkeleton = () => (
  <div className='flex flex-col w-48 text-gray-200 '>
    <Image src='https://via.placeholder.com/150' className='w-48 h-36' alt='' />
    <div className='flex flex-col p-2 bg-white/90 backdrop-filter backdrop-blur-sm filter'>
      <Skeleton className='w-full h-6' />
      <Skeleton className='w-3/4 h-4 mt-4' />
      <Skeleton className='w-1/2 h-4 mt-1' />
      <Skeleton className='w-3/4 h-4 mt-2' />
    </div>
  </div>
)

const PopupHomesContent = ({ id, wishlisted }: IPopupHomesContentProps) => {
  const [updateHomeMutation, { loading: wishlistLoading }] =
    useCreateUserHomeMutation({
      refetchQueries: [{ query: SearchPropertiesDocument }],
    })
  const uid = useAppSelector(selectUid)
  const highlightedHomeDetails = useGetHighlightedHomeData(id)
  const { data, loading, error } = highlightedHomeDetails!

  if (loading) return <HomeContentSkeleton />
  if (error) return <ErrorSkeleton error='Something went wrong...' />

  const imgSrc =
    (data?.property?.imgs && data?.property.imgs[0]) ||
    'https://via.placeholder.com/150'

  return (
    <div className='flex flex-col w-48 '>
      <Link href={`/homes/${id}`}>
        <div className='relative h-36'>
          <Image src={imgSrc} className='h-full' alt='' />
        </div>
      </Link>
      <div className='relative flex flex-col cursor-auto bg-white/50 backdrop-filter backdrop-blur-sm filter'>
        <div className='p-2'>
          <div className='flex items-baseline justify-between'>
            <div className='mb-1 text-2xl font-light leading-none'>
              ${data?.property?.price.toLocaleString()}
            </div>
            <button
              type='button'
              className='z-40'
              onClick={() => {
                const hId = id
                if (!hId || !uid) {
                  loginNotification()
                  return
                }
                console.log('Wishlisted: ', wishlisted, 'Hello')
                updateHomeMutation({
                  variables: {
                    createUserHomeInput: {
                      propertyId: hId,
                      buyerUid: uid,
                      type: wishlisted
                        ? UserHomeType.RemovedFromWishlist
                        : UserHomeType.Wishlisted,
                    },
                  },
                })
              }}
            >
              {/* eslint-disable-next-line no-nested-ternary */}
              {wishlistLoading ? (
                <RefreshIcon className='w-8 h-8 p-1 animate-spin-reverse' />
              ) : !wishlisted ? (
                <HeartIconReg className='w-8 h-8 p-1' />
              ) : (
                <HeartIconSolid className='w-8 h-8 p-1 text-red' />
              )}
            </button>
          </div>
          <div className='flex flex-wrap mt-2 text-sm'>
            <div className='text-sm '>
              {data?.property?.sqft.toLocaleString()} sqft
            </div>
            <span className='mx-1 text-gray-300'>•</span>
            <div>{data?.property?.beds} bd</div>
            <span className='mx-1 text-gray-300'>•</span>
            <div>{data?.property?.bath} ba</div>
            <span className='mx-1 text-gray-300'>•</span>
            <div>{data?.property?.style}</div>
          </div>
        </div>
        <Link
          href={`/homes/${id}`}
          className='p-2 text-xs bg-gray-50 line-clamp-2'
        >
          {data?.property?.address || ''}
        </Link>
      </div>
    </div>
  )
}

export default PopupHomesContent
