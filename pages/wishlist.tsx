import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Skeleton from 'src/components/molecules/Skeleton'
import { useAppSelector } from 'src/store'
import Image from 'src/components/atoms/Image2'
import { selectUid } from 'src/store/user/userSlice'
import {
  MyHomesDocument,
  UserHomeType,
  UserHomesDocument,
  UserHomesQuery,
  useCreateUserHomeMutation,
  useUserHomesQuery,
} from 'src/generated/graphql'
import Container from 'src/components/atoms/Container'
import Link from 'src/components/atoms/Link/Link'
import Button from 'src/components/atoms/Button'
import { notify } from 'src/hooks'
import { divide } from 'cypress/types/lodash'

const Grid = ({ children }: { children: React.ReactNode }) => (
  <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3'>
    {children}
  </div>
)

export const WishlistCard = ({
  item,
}: {
  item: UserHomesQuery['userHomes'][0]
}) => {
  const uid = useAppSelector(selectUid)
  const [removeUserHome, { loading: removeWishlistLoading }] =
    useCreateUserHomeMutation({
      refetchQueries: [
        {
          query: UserHomesDocument,
          variables: {
            where: {
              buyerUid: { equals: uid! },
              type: UserHomeType.Wishlisted,
            },
          },
        },
      ],
    })

  return (
    <div className='relative'>
      <Link href={`/homes/${item.propertyId}`}>
        <Image
          alt=''
          className='h-full rounded'
          src={
            (item.property.imgs && item.property.imgs[0]) ||
            'https://res.cloudinary.com/thankyou/image/upload/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg'
          }
        />
      </Link>

      <div className='mt-2 text-sm text-gray-600'>{item.property.address}</div>
      <div className='mt-1 mb-2 font-medium'>
        $ {item.property.price.toLocaleString()}
      </div>
      <Button
        isLoading={removeWishlistLoading}
        onClick={async () => {
          if (!uid) {
            notify({ message: 'You are not logged in' })
            return
          }
          await removeUserHome({
            variables: {
              createUserHomeInput: {
                buyerUid: uid,
                propertyId: item.propertyId,
                type: UserHomeType.RemovedFromWishlist,
              },
            },
          })
        }}
        size='none'
        variant='text'
        color='white'
      >
        Remove
      </Button>
    </div>
  )
}

const WishlistPage: NextPage = () => {
  const uid = useAppSelector(selectUid)

  const { data, loading } = useUserHomesQuery({
    variables: {
      where: {
        buyerUid: { equals: uid! },
        type: UserHomeType.Wishlisted,
      },
    },
  })

  const wishlistCount = data?.userHomes.length || 0

  if (loading) {
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

      {data?.userHomes.length === 0 ? (
        <div className='flex flex-col items-center justify-center h-64 gap-6'>
          <div className='text-2xl font-semibold'>Wishlist empty </div>
          <div>
            <Link
              className='underline text-primary underline-offset-4'
              href='/homes'
            >
              Search homes
            </Link>
          </div>
        </div>
      ) : null}

      <Grid>
        {data?.userHomes.map((item) => (
          <WishlistCard key={item.propertyId} item={item} />
        ))}
      </Grid>
    </Container>
  )
}

export default WishlistPage
