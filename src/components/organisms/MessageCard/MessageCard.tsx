import dateFormat from 'dateformat'
import Link from 'src/components/atoms/Link/Link'
import Image from 'src/components/atoms/Image/Image'

export interface IMessageCardProps {
  id: number
  address: string
  src?: string
  message: string
  date: string
}

const MessageCard = ({
  id,
  address,
  src,
  message,
  date,
}: IMessageCardProps) => {
  console.log(id, address, src, message, date)
  return (
    <div className='flex gap-3 overflow-hidden rounded '>
      <div className='w-24 '>
        <Link href={`/home/${id}`}>
          <Image
            alt=''
            className='w-full h-24 rounded'
            src={
              src ||
              'https://res.cloudinary.com/thankyou/image/upload/v1640725349/nike/cities/maarten-van-den-heuvel-gZXx8lKAb7Y-unsplash_llua9m.jpg'
            }
          />
        </Link>
      </div>

      <div className='flex-grow'>
        <div className='inline-block max-w-md p-2 -ml-2 bg-primary-25'>
          {message}
          <div className='mt-1 text-xs text-gray-600'>
            {dateFormat(date, 'dd mmm yyyy h:MM')}
          </div>
        </div>
        <div className='mt-2 text-xs text-gray-600'>{address}</div>
      </div>
    </div>
  )
}

export default MessageCard
