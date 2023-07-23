import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Skeleton from 'src/components/molecules/Skeleton'
import { useAppSelector } from 'src/store'
import Image from 'src/components/atoms/Image2'
import { selectUid } from 'src/store/user/userSlice'
import { useGetWishlistedHomesDetailedQuery } from 'src/generated/graphql'
import Container from 'src/components/atoms/Container'
import Link from 'next/link'

const Grid = ({ children }: { children: React.ReactNode }) => (
  <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3'>
    {children}
  </div>
)

const WishlistPage: NextPage = () => {
  const uid = useAppSelector(selectUid)

  const [{ data, fetching }] = useGetWishlistedHomesDetailedQuery({
    variables: {
      uid: uid!,
    },
    pause: !uid,
  })

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
        title={`Wishlist (${wishlistCount}) | Zillow refactor | Karthick Ragavendran.`}
        description='This is the amazing sample page. A short description goes here which says what goes here.'
      />
      <div className='mb-4 text-xl'>Wishlist</div>
      <Grid>
        {data?.wishlisted.map((item) => (
          <div key={item.id} className='relative'>
            <Link href={`/homes/${item.propertyId}`}>
              <Image
                alt=''
                className='h-full rounded'
                src={
                  (item.property?.imgs && item.property.imgs[0]) ||
                  'https://res.cloudinary.com/thankyou/image/upload/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg'
                }
              />
            </Link>

            <div className='mt-2 text-sm text-gray-600'>
              {item.property?.address}
            </div>
            <div className='mt-1 mb-2 font-medium'>
              $ {item.property?.price.toLocaleString()}
            </div>
          </div>
        ))}
      </Grid>
    </Container>
  )
}

export default WishlistPage
