import Image from 'src/components/atoms/Image'

export interface ICityCardProps {
  src?: string
  title?: string
}

const CityCard = ({
  src = 'https://res.cloudinary.com/thankyou/image/upload/v1640715615/nike/cities/newyork_zqnljo.jpg',
  title = 'New York',
}: ICityCardProps) => (
  <div className='relative overflow-hidden border border-white rounded-md shadow-md w-96 h-96'>
    <Image className='h-full' alt='' src={src} />
    <div className='absolute bottom-0 pt-24 pb-3 pl-3 pr-24 text-white bg-gradient-to-tr from-primary-800 via-transparent to-transparent'>
      <div className='text-2xl font-semibold tracking-tighter'>{title}</div>
      <div className='text-sm text-opacity-75'>24,899 properties</div>
    </div>
  </div>
)

export default CityCard
