/* eslint-disable react/jsx-props-no-spreading */
import Mapbox from 'src/components/organisms/Mapbox'
import ProductListingResult from 'src/components/organisms/ProductListingResults/ProductListingResults'
import { NextSeo } from 'next-seo'
import SearchHomesFilter from 'src/components/organisms/SearchHomesFilter'

// Get search, lat, lng from query string
const ProductListingPage = () => (
  <div>
    <NextSeo
      title='Zillow refactor project.'
      description='A short description goes here which says what goes here.'
    />
    <div className='container mx-auto'>
      <SearchHomesFilter />
      <div className='flex gap-5'>
        <div className='flex-1 hidden lg:block'>
          <div className='sticky top-0 col-span-1 overflow-hidden rounded'>
            <Mapbox />
          </div>
        </div>
        <div className='flex-1'>
          <ProductListingResult />
        </div>
      </div>
    </div>
  </div>
)

export default ProductListingPage
