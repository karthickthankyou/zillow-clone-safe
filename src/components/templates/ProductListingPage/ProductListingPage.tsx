/* eslint-disable react/jsx-props-no-spreading */
import Mapbox from 'src/components/organisms/Mapbox'
import ProductListingResult from 'src/components/organisms/ProductListingResults/ProductListingResults'
import { NextSeo } from 'next-seo'
import SearchHomesFilter from 'src/components/organisms/SearchHomesFilter'
import {
  HomeMarkers,
  CityMarkers,
  PanelContainer,
  PanelChild,
  Fetching,
  Error,
  ZoomControls,
} from 'src/components/organisms/MapboxContent/MapboxContent'

import { useSearchHomesByLocationQuery } from 'src/generated/graphql'
import { useAppSelector } from 'src/store'
import { selectFilters } from 'src/store/cities/citySlice'

// Get search, lat, lng from query string
const ProductListingPage = () => {
  const filterVariables = useAppSelector(selectFilters)
  const [{ data: homesMap, fetching, error }] = useSearchHomesByLocationQuery({
    variables: filterVariables,
  })

  return (
    <div>
      <NextSeo
        title='Zillow refactor project.'
        description='A short description goes here which says what goes here.'
      />
      <div className='container mx-auto'>
        <SearchHomesFilter />
        <div className='flex flex-col gap-5 lg:flex-row'>
          <div className='flex-1 lg:block'>
            <div className='sticky top-0 w-full col-span-1 overflow-hidden rounded h-screen50 lg:h-screen '>
              <Mapbox>
                <HomeMarkers homes={homesMap?.homes || []} />
                <CityMarkers cities={homesMap?.cities || []} />
                <PanelContainer>
                  <PanelChild position='center-bottom'>
                    <Fetching fetching={fetching} />
                    <Error error={error} />
                  </PanelChild>
                  <PanelChild position='left-top'>
                    <ZoomControls />
                  </PanelChild>
                </PanelContainer>
              </Mapbox>
            </div>
          </div>
          <div className='flex-1'>
            <ProductListingResult />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListingPage
