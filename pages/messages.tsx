import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Skeleton from 'src/components/molecules/Skeleton'
import { useAppSelector } from 'src/store'
import { selectUid } from 'src/store/user/userSlice'
import {
  useGetMessagesQuery,
  useGetEnquiriesQuery,
} from 'src/generated/graphql'
import Container from 'src/components/atoms/Container'
import MessageCard from 'src/components/organisms/MessageCard/MessageCard'

const MessagesPage: NextPage = () => {
  const uid = useAppSelector(selectUid)

  const [{ data, fetching }] = useGetMessagesQuery({
    variables: {
      uid: uid!,
    },
    pause: !uid,
  })
  const [{ data: dataEnquiries }] = useGetEnquiriesQuery({
    variables: {
      uid: uid!,
    },
    pause: !uid,
  })

  const messagesCount = data?.messages.length || 0

  if (fetching) {
    return (
      <div>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Skeleton key={item} className='w-full h-32 rounded' />
        ))}
      </div>
    )
  }

  if (messagesCount === 0) {
    return (
      <div className='flex items-center justify-center gap-2 h-screen50'>
        <div>No messages found.</div>
      </div>
    )
  }
  return (
    <Container>
      <NextSeo
        title={`Messages (${messagesCount}) | Zillow refactor | Karthick Ragavendran`}
        description='This is the amazing sample page. A short description goes here which says what goes here.'
      />
      <div className='min-h-screen50'>
        <div className='mb-4 text-xl'>Messages ({data?.messages.length}) </div>
        <div className='flex flex-col gap-2'>
          {data?.messages.map((item) => (
            <MessageCard
              key={item.id}
              id={item.home.id}
              address={item.home.address}
              message={item.message}
              date={item.created_at}
            />
          ))}
        </div>
      </div>
      <div className='min-h-screen50'>
        {dataEnquiries?.messages && dataEnquiries?.messages?.length > 0 && (
          <>
            <div className='mb-4 text-xl'>
              Enquiries ({dataEnquiries?.messages.length})
            </div>
            <div className='flex flex-col gap-2'>
              {dataEnquiries?.messages.map((item) => (
                <MessageCard
                  key={item.id}
                  id={item.home.id}
                  src={item.home.imgs && item.home.imgs[0]}
                  address={item.home.address}
                  email={item.email}
                  name={item.name}
                  phone={item.phone}
                  message={item.message}
                  date={item.created_at}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Container>
  )
}

export default MessagesPage
