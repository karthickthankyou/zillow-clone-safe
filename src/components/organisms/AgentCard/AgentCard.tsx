import Image from 'src/components/atoms/Image'
import StarIcon from '@heroicons/react/solid/StarIcon'

export interface IAgentCardProps {}

const AgentCard = () => (
  <div className='mb-5'>
    <div className='relative h-56 overflow-hidden border border-white rounded-lg shadow-md'>
      <Image
        className='absolute inset-0 h-full'
        alt=''
        src='https://res.cloudinary.com/thankyou/image/upload/v1641010165/nike/austin-distel-7uoMmzPd2JA-unsplash_drbcgg.jpg'
      />
      <div className='absolute inset-0 flex items-end justify-start'>
        <div className='inline-block px-3 py-1 text-sm text-black truncate bg-white bg-opacity-90 rounded-tr-md rounded-bl-md'>
          Coldwell Banker Prime Properties
        </div>
      </div>
    </div>
    <div className='flex items-start justify-between gap-2 mx-1 mt-3'>
      <div>
        <div className='text-lg font-medium leading-none'>
          Richard Parent - NY Licensed R.E. Salesperson
        </div>
        <div className='mt-2 text-sm text-gray-600 truncate'>Bouckville NY</div>
        <div className='mt-1 text-sm text-gray-600 truncate'>
          (315) 842-4321
        </div>
        <div className='flex items-center mt-2 text-sm truncate '>
          <span className='font-semibold text-primary-600 '>4.5</span>
          <StarIcon className='w-4 h-4 ml-0.5 text-primary-600' />
          <span className='ml-2 text-gray-600'>(3,846 ratings)</span>
        </div>
      </div>
    </div>
  </div>
)

export default AgentCard
