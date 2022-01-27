import Image from 'src/components/atoms/Image'
import Link from 'src/components/atoms/Link'
import { Cities } from 'src/generated/graphql'

export type ICityCardProps = Pick<
  Cities,
  'displayName' | 'image' | 'lat' | 'lng' | 'propertiesCount'
>

export const CityCardShadow = () => (
  <div className='relative block mt-2 mb-12 overflow-hidden transition-all duration-500 border-2 border-white rounded-md shadow-md animate-pulse w-96 h-96'>
    <div className='absolute inset-x-0 bottom-0 p-3 space-y-2'>
      <div className='w-1/3 h-6 bg-white rounded-lg' />
      <div className='w-1/2 h-4 bg-white rounded-lg' />
    </div>
    <div className='h-full bg-gray-100 ' />
  </div>
)

const CityCard = ({
  image = 'https://res.cloudinary.com/thankyou/image/upload/v1640715615/nike/cities/newyork_zqnljo.jpg',
  displayName = 'New York',
  lat = 40.79224,
  lng = -73.98837,
  propertiesCount = 0,
}: ICityCardProps) => (
  <Link
    href={{
      pathname: '/homes',
      query: { search: displayName, lat, lng },
    }}
    className='relative block mt-2 mb-12 overflow-hidden transition-all duration-500 border-2 border-white rounded-md shadow-md cursor-pointer hover:scale-110 hover:shadow-xl hover:z-10 group w-96 h-96'
  >
    <Image
      className='h-full transition-all duration-700 scale-110 group-hover:brightness-110 brightness-95 group-hover:scale-100'
      alt=''
      src={image}
    />
    <div className='absolute bottom-0 pt-24 pb-3 pl-3 pr-24 text-white bg-gradient-to-tr from-primary-800 via-transparent to-transparent'>
      <div className='text-2xl font-semibold tracking-tighter'>
        {displayName}
      </div>
      <div className='text-sm text-opacity-75'>24,899 {propertiesCount}</div>
    </div>
  </Link>
)

export default CityCard
