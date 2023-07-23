import { NextPage } from 'next'

import { useGetMyHomesQuery } from 'src/generated/graphql'
import { useAppSelector } from 'src/store'
import Container from 'src/components/atoms/Container'
import MyHomesCard from 'src/components/organisms/MyHomesCard/MyHomesCard'
import Link from 'next/link'

const MyHomes: NextPage = () => {
  const uid = useAppSelector((state) => state.user.data.user?.uid)
  const [{ data }] = useGetMyHomesQuery({
    variables: {
      where: {
        sellerUid: { equals: uid },
      },
    },
  })

  return (
    <Container className='min-h-screen'>
      <div className='flex items-center justify-between mb-4'>
        <div className='text-xl font-semibold text-luxury'>My homes</div>
        <Link
          href='homes/add'
          className='bg-luxury px-3 py-1.5 rounded-full text-white'
        >
          Post new home
        </Link>
      </div>
      <div className='grid grid-cols-3 gap-3'>
        {data?.properties.map((item) => (
          <MyHomesCard key={item.id} home={item} />
        ))}
      </div>
    </Container>
  )
}

export default MyHomes
