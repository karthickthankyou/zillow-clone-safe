import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Skeleton from 'src/components/molecules/Skeleton'
import { useAppSelector } from 'src/store'
import { selectUid } from 'src/store/user/userSlice'
import { useMessagesQuery } from 'src/generated/graphql'
import Container from 'src/components/atoms/Container'
import MessageCard from 'src/components/organisms/MessageCard/MessageCard'

const MessagesPage: NextPage = () => {
  const uid = useAppSelector(selectUid)

  const { data, loading } = useMessagesQuery({
    variables: {
      where: {
        uid: { equals: uid },
      },
    },
  })
  const { data: dataEnquiries } = useMessagesQuery({
    variables: {
      where: {
        property: {
          is: { sellerUid: { equals: uid } },
        },
      },
    },
  })

  const messagesCount = data?.messages.length || 0

  if (loading) {
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
        title={`Messages (${messagesCount}) | Zillow refactor | Karthick Ragavendran - Sample page.`}
        description='This is the amazing sample page. A short description goes here which says what goes here.'
      />
      <div className='min-h-screen50'>
        <div className='mb-4 text-xl'>Messages ({data?.messages.length}) </div>
        <div className='flex flex-col gap-2'>
          {data?.messages.map((item) => (
            <MessageCard
              key={item.id}
              id={item.property.id}
              address={item.property.address}
              message={item.message}
              date={item.createdAt}
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
                  id={item.property.id}
                  src={item.property.imgs && item.property.imgs[0]}
                  address={item.property.address}
                  message={item.message}
                  date={item.createdAt}
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
