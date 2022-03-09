import Image from 'src/components/atoms/Image'
import Link from 'src/components/atoms/Link'
import CurrencyDollarIcon from '@heroicons/react/solid/CurrencyDollarIcon'
import ProductPageCarousel from 'src/components/organisms/ProductPageCarousel'
import { Disclosure } from '@headlessui/react'
import Mapbox from 'src/components/organisms/Mapbox'
import HScroll from 'src/components/molecules/HScroll'
import { MapProvider } from 'src/store/map/mapContext'
import {
  CityMarkers,
  Fetching,
  HomeMarkers,
  Panel,
  PanelContainer,
  StateMarkers,
  ZoomControls,
  Error,
} from 'src/components/organisms/MapboxContent/MapboxContent'
import Cities from 'src/components/templates/Cities'
import { useGetHomeQuery } from 'src/generated/graphql'
import { useScrollTo } from 'src/hooks'

import { useRouter } from 'next/router'
import { toAcres } from 'src/lib/util'
import { useAppDispatch } from 'src/store'
import { setHighlightedHomeId } from 'src/store/home/homeSlice'
import { useEffect } from 'react'
import { setViewport } from 'src/store/map/mapSlice'
import AgentContactForm from 'src/components/organisms/AgentContactForm'
import {
  features as featuresData,
  interiors as interiorsData,
  propertyDetails,
  constructionDetails,
  utilities,
  neighborhoodDetails,
  financialDetails,
  otherDetails,
} from './data'
import Details from './Details'
import MainCard from './MainCard'
import { MainCardShadow } from './MainCard/MainCard'
import NearByHomes from './NearByHomes'

export interface IProductPageProps {}

const ProductPage = () => {
  const [contactFormRef, scrollToContactForm] = useScrollTo()
  const { id } = useRouter().query
  const [home] = useGetHomeQuery({
    variables: {
      id: +id || 0,
    },
  })

  const dispatch = useAppDispatch()

  const homeData = home.data?.homes_by_pk

  useEffect(() => {
    dispatch(setHighlightedHomeId(homeData?.id))
    dispatch(
      setViewport({
        latitude: homeData?.lat || 0,
        longitude: homeData?.lng || 0,
        zoom: 11,
      })
    )
  }, [dispatch, homeData])

  return (
    <div className='container mx-auto '>
      <div className='grid-cols-3 gap-3 lg:grid'>
        <div className='col-span-2 space-y-6 md:space-y-12'>
          <ProductPageCarousel />
          <MainCard
            className='block lg:hidden'
            home={homeData}
            scrollToContactForm={scrollToContactForm}
          />

          <Details
            title='Facts and features'
            content={[
              { title: 'Type', content: homeData?.style },
              { title: 'Year built', content: homeData?.yearBuilt },
              { title: 'Beds', content: homeData?.beds },
              { title: 'Bath', content: homeData?.bath },
              { title: 'Lot size', content: homeData?.lotSize },
            ]}
          />
          <div>
            <div className='mb-4 text-xl font-semibold'>About</div>
            <div className='max-w-lg leading-relaxed text-gray-800'>
              {homeData?.description}
            </div>
          </div>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Panel className='space-y-12'>
                  <div className='p-2 text-xs bg-gray-100'>
                    Note: All the below content till the contact form is
                    placeholder text.{' '}
                    <button
                      type='button'
                      className='font-semibold'
                      onClick={scrollToContactForm}
                    >
                      Go to contact form
                    </button>
                  </div>
                  <Details title='Interiors' content={interiorsData} />
                  <Details title='Property details' content={propertyDetails} />
                  <Details
                    title='Construction details'
                    content={constructionDetails}
                  />
                  <Details
                    title='Utilities / Green Energy Details'
                    content={utilities}
                  />
                  <Details
                    title='Neighborhood Details'
                    content={neighborhoodDetails}
                  />
                  <Details
                    title='Financial Details'
                    content={financialDetails}
                  />
                  <Details title='Other Details' content={otherDetails} />
                </Disclosure.Panel>
                <Disclosure.Button className='w-full py-2 rounded-lg bg-primary-100'>
                  See {open ? 'less' : 'more'}
                </Disclosure.Button>
              </>
            )}
          </Disclosure>

          <AgentContactForm ref={contactFormRef} homeId={homeData?.id!} />
          <div className='h-144'>
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
                  <Panel position='right-center'>
                    <ZoomControls />
                  </Panel>
                </PanelContainer>
              </Mapbox>
            </MapProvider>
          </div>
        </div>

        <MainCard
          className='hidden lg:block'
          home={homeData}
          scrollToContactForm={scrollToContactForm}
        />
      </div>
      <NearByHomes homeId={homeData?.id || 0} />
    </div>
  )
}

export default ProductPage
