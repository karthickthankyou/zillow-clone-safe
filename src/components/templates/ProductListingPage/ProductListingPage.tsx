/* eslint-disable react/jsx-props-no-spreading */
import Mapbox from 'src/components/organisms/Mapbox'
import ProductListingResult from 'src/components/organisms/ProductListingResults/ProductListingResults'
import { NextSeo } from 'next-seo'
import SearchHomesFilter from 'src/components/organisms/SearchHomesFilter'
import {
  HomeMarkers,
  PanelContainer,
  Panel,
  Fetching,
  Error,
  ZoomControls,
  CityMarkers,
  StateMarkers,
} from 'src/components/organisms/MapboxContent/MapboxContent'

import { MapProvider } from 'src/store/map/mapContext'

// Get search, lat, lng from query string
const ProductListingPage = () => (
  <div>
    <NextSeo
      title='🏡 Zillow refactor project.'
      description='A short description goes here which says what goes here.'
    />
    <div className='container mx-auto'>
      <SearchHomesFilter />
      <div className='flex flex-col gap-5 lg:flex-row'>
        <div className='flex-1 lg:block'>
          <div className='sticky top-0 w-full col-span-1 overflow-hidden rounded h-screen50 lg:h-screen '>
            <MapProvider>
              <Mapbox>
                <HomeMarkers />
                <CityMarkers />
                <StateMarkers />
                <PanelContainer>
                  <Panel position='center-bottom'>
                    <Fetching />
                    <Error />
                  </Panel>
                  <Panel position='left-top'>
                    <ZoomControls />
                  </Panel>
                </PanelContainer>
              </Mapbox>
            </MapProvider>
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
