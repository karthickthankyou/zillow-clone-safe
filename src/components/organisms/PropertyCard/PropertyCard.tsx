import Badge from 'src/components/atoms/Badge'
import Image from 'src/components/atoms/Image'
import HeartIconReg from '@heroicons/react/outline/HeartIcon'

export interface IPropertyCardProps {}

const PropertyCard = () => (
  <div>
    <div className='relative overflow-hidden border border-white rounded-md shadow-lg h-80'>
      <Image
        className='absolute h-full rounded'
        src='https://res.cloudinary.com/thankyou/image/upload/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg'
        // src='https://res.cloudinary.com/thankyou/image/upload/v1640617959/nike/house1_tmtonc.jpg'
        alt=''
      />
      <button
        type='button'
        className='absolute top-0 right-0 flex items-start justify-end text-red-500 bg-white rounded-none rounded-bl'
      >
        <HeartIconReg className='w-8 h-8 p-1' />
      </button>
    </div>

    <div className='mt-2 mb-6 ml-1'>
      <div className='text-lg font-medium'>$925,000</div>
      <div className='flex mt-1 space-x-1 text-sm'>
        <div>6 bds</div>
        <div>&#11049;</div>
        <div>2 ba</div>
        <div>&#11049;</div>
        <div>1,884 sqft</div>
        <div>&#11049;</div>
        <Badge size='sm' variant='green'>
          House for sale
        </Badge>
      </div>
      <div className='mt-1 text-sm text-gray-500'>
        2368 62nd St, Brooklyn, NY 11204
      </div>
    </div>
  </div>
)

export default PropertyCard
