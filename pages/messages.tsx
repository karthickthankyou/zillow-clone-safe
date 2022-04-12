import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Skeleton from 'src/components/molecules/Skeleton'
import { useAppSelector, useAppDispatch } from 'src/store'
import Image from 'src/components/atoms/Image2'
import { selectUid } from 'src/store/user/userSlice'
import { useGetMessagesQuery } from 'src/generated/graphql'
import Container from 'src/components/atoms/Container'
import dateFormat from 'dateformat'
import Link from 'src/components/atoms/Link/Link'
import MessageCard from 'src/components/organisms/MessageCard/MessageCard'

const MessagesPage: NextPage = () => {
  const uid = useAppSelector(selectUid)
  const dispatch = useAppDispatch()

  const [{ data, fetching, stale, error }] = useGetMessagesQuery({
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
    <Container className='min-h-screen'>
      <NextSeo
        title={`Messages (${messagesCount}) | Zillow refactor | Karthick Ragavendran - Sample page.`}
        description='This is the amazing sample page. A short description goes here which says what goes here.'
      />
      <div className='mb-4 text-xl'>Messages</div>
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
    </Container>
  )
}

export default MessagesPage
