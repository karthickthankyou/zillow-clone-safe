import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/dist/client/router'
import ProductListingPage from 'src/components/templates/ProductListingPage'
import { getQueryParam } from 'src/lib/util'

const Homes: NextPage = () => {
  const router = useRouter()
  const search = getQueryParam(router.query.search, 'New York')
  const lat = getQueryParam(router.query.lat, '40.7128')
  const lng = getQueryParam(router.query.lng, '-74.0060')

  console.log('Rendering: ', search, lat, lng)

  return (
    <div>
      <NextSeo
        title='Next boilerplate - Sample page.'
        description='This is the amazing sample page. A short description goes here which says what goes here.'
      />
      <ProductListingPage search={search} lat={+lat} lng={+lng} />
    </div>
  )
}

export default Homes
