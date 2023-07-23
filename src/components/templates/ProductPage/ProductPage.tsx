import ProductPageCarousel from 'src/components/organisms/ProductPageCarousel'
import { Disclosure } from '@headlessui/react'
import Mapbox from 'src/components/organisms/Mapbox'

import {
  Fetching,
  HomeMarkers,
  Panel,
  PanelContainer,
  Error,
} from 'src/components/organisms/MapboxContent/MapboxContent'
import { GetHomeQuery } from 'src/generated/graphql'
import { useScrollTo, scrollToTop } from 'src/hooks'

import AgentContactForm from 'src/components/organisms/AgentContactForm'
import { DefaultZoomControls as ZoomControls } from 'src/components/organisms/ZoomControls/ZoomControls'
import ArrowCircleUpIcon from '@heroicons/react/outline/ArrowCircleUpIcon'
import LoginIcon from '@heroicons/react/outline/LoginIcon'
import SearchIcon from '@heroicons/react/outline/SearchIcon'
import PhoneIcon from '@heroicons/react/outline/PhoneIcon'
import { Children } from 'src/types'
import Link from 'next/link'
import Slideup from 'src/components/molecules/Slideup'
import Container from 'src/components/atoms/Container'
import { UseQueryResponse } from 'urql'

import { useAppSelector } from 'src/store'
import { selectHomesDetailed } from 'src/store/home/homeSlice'
import { useRouter } from 'next/router'
import { randomNumber } from 'src/lib/util'
import {
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
import NearByHomes from './NearByHomes'

export interface IProductPageProps {
  home: UseQueryResponse<GetHomeQuery, object>[0]
}

const HighText = ({ children }: { children: Children }) => (
  <div className='flex items-center px-4 py-2 space-x-2 text-black transition-all border border-white rounded-full hover:bg-primary-50 hover:shadow-2xl'>
    {children}
  </div>
)

const ProductPage = ({ home }: IProductPageProps) => {
  const [contactFormRef, scrollToContactForm] = useScrollTo()

  const { data: nearbyHomes } = useAppSelector(selectHomesDetailed)

  const homeData = home?.data?.property

  const filteredHomes =
    nearbyHomes?.properties.filter(
      (item) => item.id !== home.data?.property?.id
    ) || []

  const randomHomeId =
    filteredHomes[randomNumber({ max: filteredHomes.length })]?.id

  const router = useRouter()

  return (
    <Container>
      <div className='grid-cols-3 gap-6 lg:grid'>
        <div className='col-span-2 space-y-6 md:space-y-12'>
          <ProductPageCarousel imgs={homeData?.imgs || []} />
          <MainCard
            className='block lg:hidden '
            home={home}
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
          <div>
            <div className='mb-4 text-xl font-semibold'>Features</div>
            <div className='flex flex-wrap max-w-lg gap-3 leading-relaxed text-gray-800'>
              {homeData?.features?.split('|').map((item) => (
                <div
                  key={item}
                  className='px-2 py-1 border border-white rounded shadow-md bg-gray-50'
                >
                  {item}
                </div>
              ))}
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

          <Mapbox>
            <HomeMarkers />
            <PanelContainer>
              <Panel position='center-bottom'>
                <Fetching />
                <Error />
              </Panel>

              <Panel position='right-center'>
                <ZoomControls />
              </Panel>
            </PanelContainer>
          </Mapbox>
        </div>

        <MainCard
          className='hidden lg:block '
          home={home}
          scrollToContactForm={scrollToContactForm}
        />
      </div>
      <NearByHomes homeId={homeData?.id || 0} />

      <Slideup className='mt-12 mb-24'>
        <div className='flex flex-wrap justify-end gap-3'>
          <button type='button' onClick={scrollToContactForm}>
            <HighText>
              <PhoneIcon className='w-8 h-8 text-black' />
              <div>Contact agent</div>
            </HighText>
          </button>
          <button type='button' onClick={scrollToTop}>
            <HighText>
              <ArrowCircleUpIcon className='w-8 h-8' />
              <div>Back to top</div>
            </HighText>
          </button>
          <Link href='/homes'>
            <HighText>
              <SearchIcon className='w-8 h-8' />
              <div>Back to search</div>
            </HighText>
          </Link>
          <button
            type='button'
            disabled={!randomHomeId}
            onClick={() => {
              router.push(`/homes/${randomHomeId}`)
            }}
            className='disabled:cursor-not-allowed'
          >
            <HighText>
              <LoginIcon className='w-8 h-8 rotate-180' />
              <div>Enter a home nearby</div>
            </HighText>
          </button>
        </div>
      </Slideup>
    </Container>
  )
}

export default ProductPage
