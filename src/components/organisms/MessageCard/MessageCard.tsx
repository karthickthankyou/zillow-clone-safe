import dateFormat from 'dateformat'
import Link from 'next/link'
import Image from 'src/components/atoms/Image/Image'
import { GetMessagesQuery } from 'src/generated/graphql'

type IMessageCard = {
  message: GetMessagesQuery['messages'][0]
}

const MessageCard = ({ message }: IMessageCard) => (
  <div className='flex gap-3 overflow-hidden rounded '>
    <div className='w-24 '>
      <Link href={`/homes/${message.property?.id}`}>
        <Image
          alt=''
          className='w-full h-24 rounded'
          src={
            message.property?.imgs?.[0] ||
            'https://res.cloudinary.com/thankyou/image/upload/v1640725349/nike/cities/maarten-van-den-heuvel-gZXx8lKAb7Y-unsplash_llua9m.jpg'
          }
        />
      </Link>
    </div>

    <div className='flex-grow'>
      <div className='inline-block max-w-md p-2 -ml-2 bg-primary-25'>
        <div>{message.message}</div>
        <div className='mt-1 text-xs text-gray-600'>
          {dateFormat(message.createdAt, 'dd mmm yyyy h:MM')}
        </div>
      </div>
    </div>
  </div>
)

export default MessageCard
