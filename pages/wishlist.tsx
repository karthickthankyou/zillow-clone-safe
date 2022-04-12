import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Skeleton from 'src/components/molecules/Skeleton'
import { useAppSelector, useAppDispatch } from 'src/store'
import Image from 'src/components/atoms/Image2'
import { Children } from 'src/types'
import { selectUid } from 'src/store/user/userSlice'
import { useGetWishlistedHomesDetailedQuery } from 'src/generated/graphql'
import Container from 'src/components/atoms/Container'
import Link from 'src/components/atoms/Link/Link'

const Grid = ({ children }: { children: React.ReactNode }) => (
  <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3'>
    {children}
  </div>
)

const WishlistPage: NextPage = () => {
  const uid = useAppSelector(selectUid)
  const dispatch = useAppDispatch()

  const [{ data, fetching, stale, error }] = useGetWishlistedHomesDetailedQuery(
    {
      variables: {
        uid: uid!,
      },
      pause: !uid,
    }
  )

  const wishlistCount = data?.wishlisted.length || 0

  if (fetching) {
    return (
      <Grid>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Skeleton key={item} className='w-full h-64 rounded' />
        ))}
      </Grid>
    )
  }
  return (
    <Container className='min-h-screen'>
      <NextSeo
        title={`Wishlist (${wishlistCount}) | Zillow refactor | Karthick Ragavendran - Sample page.`}
        description='This is the amazing sample page. A short description goes here which says what goes here.'
      />
      <div className='mb-4 text-xl'>Wishlist</div>
      <Grid>
        {data?.wishlisted.map((item) => (
          <div key={item.id} className='relative'>
            <Link href={`/home/${item.hId}`}>
              <Image
                alt=''
                className='h-full rounded'
                src={
                  (item.home.imgs && item.home.imgs[0]) ||
                  'https://res.cloudinary.com/thankyou/image/upload/v1640725349/nike/cities/maarten-van-den-heuvel-gZXx8lKAb7Y-unsplash_llua9m.jpg'
                }
              />
            </Link>

            <div className='mt-2 text-sm text-gray-600'>
              {item.home.address}
            </div>
            <div className='mt-1 mb-2 font-medium'>
              $ {item.home.price.toLocaleString()}
            </div>
          </div>
        ))}
      </Grid>
    </Container>
  )
}

export default WishlistPage
