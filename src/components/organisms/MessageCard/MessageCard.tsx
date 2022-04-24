import dateFormat from 'dateformat'
import Link from 'src/components/atoms/Link/Link'
import Image from 'src/components/atoms/Image/Image'

export interface IMessageCardProps {
  id: number
  address: string
  src?: string
  message: string
  name?: string
  email?: string
  phone?: string
  date: string
}

const MessageCard = ({
  id,
  address,
  src,
  name,
  email,
  phone,
  message,
  date,
}: IMessageCardProps) => (
  <div className='flex gap-3 overflow-hidden rounded '>
    <div className='w-24 '>
      <Link href={`/homes/${id}`}>
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
      {name && <div className='font-medium'>{name}</div>}
      {phone && <div className='text-sm text-gray-800'>{phone}</div>}
      {email && <div className='text-sm text-gray-800'>{email}</div>}
      <div className='inline-block max-w-md p-2 -ml-2 bg-primary-25'>
        <div>{message}</div>
        <div className='mt-1 text-xs text-gray-600'>
          {dateFormat(date, 'dd mmm yyyy h:MM')}
        </div>
      </div>
      <div className='mt-2 text-xs text-gray-600'>{address}</div>
    </div>
  </div>
)

export default MessageCard
