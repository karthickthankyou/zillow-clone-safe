/* eslint-disable camelcase */
import { Popup } from 'react-map-gl'
import { UseQueryState } from 'urql/dist/types/hooks/useQuery'
import {
  SearchHomesByLocationQuery,
  GetHomeByIdQuery,
  useInsertUserHomeMutation,
  GetWishlistedHomesQuery,
  User_Homes_Types_Enum,
} from 'src/generated/graphql'
import Image from 'src/components/atoms/Image'
import HeartIconReg from '@heroicons/react/outline/HeartIcon'
import HeartIconSolid from '@heroicons/react/solid/HeartIcon'
import XIcon from '@heroicons/react/outline/XIcon'
import { useKeypress } from 'src/hooks'
import { useAppSelector } from 'src/store'
import { selectUser } from 'src/store/user'

export interface IPopupProps {
  marker: SearchHomesByLocationQuery['homes'][number]
  highlightedHomeData?: UseQueryState<GetHomeByIdQuery, object>
  closePopup: () => void
  wishlisted?: GetWishlistedHomesQuery['wishlisted'][number]
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

const PopupComponent = ({
  marker,
  highlightedHomeData,
  closePopup,
  wishlisted,
}: IPopupProps) => {
  const { data, fetching, error } = highlightedHomeData!
  const [{ fetching: wishlistLoading }, updateHomeMutation] =
    useInsertUserHomeMutation()
  const user = useAppSelector(selectUser)

  useKeypress('Escape', closePopup)
  return (
    <div>
      <Popup
        latitude={marker.lat}
        longitude={marker.lng}
        sortByDepth
        offsetLeft={10}
        offsetTop={-10}
        dynamicPosition={false}
        closeButton={false}
      >
        {/* eslint-disable-next-line no-nested-ternary */}
        {fetching ? (
          <Skeleton />
        ) : error ? (
          <div>{error.message}</div>
        ) : (
          <div className='flex flex-col w-48 '>
            <div className='relative h-36'>
              <Image
                src='https://via.placeholder.com/150'
                className='h-full'
                alt=''
              />
              <button
                type='button'
                className='absolute top-0 right-0 p-0.5 rounded-bl bg-black/30 hover:bg-black/40'
                onClick={closePopup}
              >
                <XIcon className='w-5 h-5 text-white' />
              </button>
            </div>
            <div className='relative flex flex-col p-2 bg-white/50 backdrop-filter backdrop-blur-sm filter'>
              <button
                type='button'
                className='absolute top-0 right-0 p-1'
                onClick={() => {
                  const hId = marker.id
                  const { uid } = user.data
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
        )}
      </Popup>
    </div>
  )
}
export default PopupComponent
