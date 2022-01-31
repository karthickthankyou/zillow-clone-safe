import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/dist/client/router'
import ProductListingPage from 'src/components/templates/ProductListingPage'
import { getQueryParam } from 'src/lib/util'

const Homes: NextPage = () => {
  const router = useRouter()
  const search = getQueryParam(router.query.search, 'New York')
  const initiaLatitude = getQueryParam(router.query.lat, '40.7128')
  const initialLongitude = getQueryParam(router.query.lng, '-74.0060')

  return (
    <div>
      <ProductListingPage
        search={search}
        initiaLatitude={+initiaLatitude}
        initialLongitude={+initialLongitude}
      />
    </div>
  )
}

export default Homes
