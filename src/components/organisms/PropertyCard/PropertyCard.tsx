import Badge from 'src/components/atoms/Badge'
import Image from 'src/components/atoms/Image'
import HeartIconReg from '@heroicons/react/outline/HeartIcon'
import { Properties } from 'src/generated/graphql'
import { useAppDispatch } from 'src/store'
import { useHomesDetailed } from 'src/store/homes/homeHooks'

export type IPropertyCardProps = Partial<Properties>

const PropertyCard = ({
  id,
  address,
  beds,
  bath,
  price,
  sqft,
}: IPropertyCardProps) => {
  const dispatch = useAppDispatch()
  const setHighlightedHome = (value: number | null | undefined) =>
    dispatch({ type: 'SET_HIGHLIGHTED_ID', payload: value })

  return (
    <div
    // onMouseOver={() => setHighlightedHome(id)}
    // onFocus={() => setHighlightedHome(id)}
    // onMouseLeave={() => setHighlightedHome(null)}
    >
      <div className='relative overflow-hidden border border-white rounded-md shadow-lg h-80'>
        <Image
          className='absolute h-full transition-transform duration-1000 scale-105 rounded hover:scale-100'
          src='https://res.cloudinary.com/thankyou/image/upload/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg'
          // src='https://res.cloudinary.com/thankyou/image/upload/v1640617959/nike/house1_tmtonc.jpg'
          alt=''
        />
        <button
          type='button'
          className='absolute top-0 right-0 flex items-start justify-end text-white rounded-none rounded-bl backdrop-filter backdrop-blur bg-black/50'
        >
          <HeartIconReg className='w-8 h-8 p-1' />
        </button>
      </div>

      <div className='mt-2 mb-4 ml-1'>
        <div className='text-lg font-medium'>$ {price?.toLocaleString()}</div>
        <div className='flex items-center mt-0.5 space-x-1 text-sm'>
          <div>{beds} bds</div>
          <div>&#11049;</div>
          <div>{bath} ba</div>
          <div>&#11049;</div>
          <div>{sqft} sqft</div>
          <div>&#11049;</div>
          <Badge size='sm' variant='green'>
            House for sale
          </Badge>
        </div>
        <div className='mt-1 text-sm text-gray-500'>{address}</div>
      </div>
    </div>
  )
}

export const PropertyCardSkeleton = () => (
  <div>
    <div className='relative overflow-hidden bg-gray-200 border border-white rounded-md shadow-lg h-80 animate-pulse' />

    <div className='mt-2 mb-4 ml-1 text-gray-200'>
      <div className='w-1/4 text-lg bg-gray-200 rounded-full animate-pulse'>
        -
      </div>
      <div className='flex w-3/4 mt-0.5 text-sm bg-gray-200 rounded-full animate-pulse'>
        -
      </div>
      <div className='w-2/3 mt-1 text-sm bg-gray-200 rounded-full animate-pulse'>
        -
      </div>
    </div>
  </div>
)

export default PropertyCard
