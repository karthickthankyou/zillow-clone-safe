import CurrencyDollarIcon from '@heroicons/react/outline/CurrencyDollarIcon'
import Link from 'src/components/atoms/Link'
import { GetHomeQuery } from 'src/generated/graphql'
import { toAcres } from 'src/lib/util'
import Image from 'src/components/atoms/Image'
import Skeleton from 'src/components/molecules/Skeleton'
import { UseQueryResponse } from 'urql'

export interface IMainCardProps {
  home: UseQueryResponse<GetHomeQuery, object>[0]
  scrollToContactForm: () => void
  className?: string
}

export const MainCardSkeleton = ({ className }: { className?: string }) => (
  <div className={`${className}`}>
    <Skeleton className='w-1/4 h-4' />
    <Skeleton className='h-4 mt-3 ' />
    <Skeleton className='w-1/4 h-4 mt-1 ' />
    <Skeleton className='w-3/4 h-10 mt-8' />
    <Skeleton className='h-4 mt-4 ' />
    <Skeleton className='w-1/2 h-4 mt-1' />
    <Skeleton className='h-4 mt-6 ' />
    <Skeleton className='w-3/4 h-4 mt-1' />
    <div className='flex items-center gap-4 mt-6'>
      <Skeleton className='flex-shrink-0 rounded-full w-14 h-14' />
      <div className='w-full'>
        <Skeleton className='w-full h-4' />
        <Skeleton className='w-3/4 h-4 mt-1' />
      </div>
    </div>
    <Skeleton className='h-12 mt-2 ' />
  </div>
)

const MainCard = ({ home, className, scrollToContactForm }: IMainCardProps) => {
  const homeData = home?.data?.homes_by_pk

  return home?.fetching ? (
    <MainCardSkeleton className={`${className}`} />
  ) : (
    <div className={`col-span-1 ${className}`}>
      <div className='sticky top-0 p-6 rounded-lg shadow-lg bg-striped'>
        <div className='text-xs tracking-wide text-gray-600 uppercase'>
          for sale
        </div>
        <div className='mt-1 text-gray-600'>{homeData?.address}</div>

        <h2 className='mt-6 text-4xl'>${homeData?.price.toLocaleString()}</h2>
        <div className='flex flex-wrap mt-1 '>
          <div>
            <span>{homeData?.beds} </span>
            <span className='text-base'>bd</span>
          </div>
          <span className='mx-1 text-gray-300'>•</span>
          <div>
            <span>{homeData?.bath} </span>
            <span className='text-base'>ba</span>
          </div>
          <span className='mx-1 text-gray-300'>•</span>
          <div>
            <span>{homeData?.sqft.toLocaleString()} </span>
            <span className='text-base'>sqft</span>
          </div>
          <span className='mx-1 text-gray-300'>•</span>
          <div>
            <span>{toAcres(homeData?.lotSize || 0)} </span>
            <span className='text-base'>acre lot</span>
          </div>
        </div>

        <div className='mt-6'>
          <div>
            Est. payment: $
            {Math.round((homeData?.price || 0) / 120).toLocaleString()}
            /mo
          </div>
          <Link className='flex items-center mt-1 text-primary-600' href='/'>
            <CurrencyDollarIcon className='inline w-5 h-5 mr-1' /> Get
            pre-qualified
          </Link>
        </div>
        <Link href='agent/5' className='flex items-center gap-3 mt-6'>
          <Image
            className='flex-shrink-0 w-12 h-12 rounded-full'
            alt=''
            src='https://res.cloudinary.com/thankyou/image/upload/v1641010165/nike/austin-distel-7uoMmzPd2JA-unsplash_drbcgg.jpg'
          />
          <div>
            <div className='text-clip'>
              Tim Ranallo
              {/* - NY Licensed R.E. Salesperson */}
            </div>
            <div className='text-sm text-gray-600 text-clip'>
              Hunt Real Estate
            </div>
          </div>
        </Link>
        <button
          className='w-full px-3 py-3 mt-3 rounded-md bg-luxury'
          type='button'
          onClick={scrollToContactForm}
        >
          Contact agent
        </button>
      </div>
    </div>
  )
}

export default MainCard
