import BannerHomeLoan from 'src/components/organisms/BannerHomeLoan'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import { MapProvider } from 'src/store/map/mapContext'
import Mapbox from 'src/components/organisms/Mapbox'
import {
  CityMarkers,
  Fetching,
  HomeMarkers,
  Panel,
  PanelContainer,
  Error,
  ZoomControls,
  StateMarkers,
} from 'src/components/organisms/MapboxContent/MapboxContent'
import { useScrollTo } from 'src/hooks'
import Container from 'src/components/atoms/Container'
import Hero from '../Hero'

export interface IHomeProps {}

const Home = () => {
  const [interactiveMapRef, scrollToMap] = useScrollTo()

  return (
    <div>
      <main>
        <Hero className='-mt-16' executeScroll={scrollToMap} />
        <Container className='mt-48 mb-36'>
          <div className='max-w-md text-4xl font-semibold '>
            {/* Biggest housing listing in entire USA. */}
            <em className='select-none text-luxury'>Millions</em> of for-sale
            and rental listings all over the United States.
          </div>
          <p className='max-w-md mt-4 text-gray-600'>
            Whether you’re buying, selling or renting, we can help you move
            forward.
          </p>
        </Container>

        <div className='w-screen h-screen ' ref={interactiveMapRef}>
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

        <div className='container mx-auto mt-12 space-y-24'>
          <BannerHomeLoan
            title='Zillow Home Loans'
            description={
              <div>
                Get pre-approved and take a big step toward buying your new
                home.
              </div>
            }
            btnText='Request Pre approval'
          />
          <BannerHomeLoan
            reverse
            title='Find an Agent'
            src='https://res.cloudinary.com/thankyou/image/upload/v1640726673/nike/people/austin-distel-va_Opp86kfQ-unsplash_avexl4.jpg'
            description={
              <div>
                Zillow&apos;s directory of local real estate agents and brokers
                connects you with professionals who can help meet your needs.
              </div>
            }
            btnText='Find agents'
          />
          <BannerHomeLoan
            title='Zillow Rental Manager'
            description={
              <div>
                <ul>
                  <li className='flex items-center gap-2'>
                    <BadgeCheckIcon className='w-5 h-5 text-black' /> List your
                    rental.
                  </li>
                  <li className='flex items-center gap-2'>
                    <BadgeCheckIcon className='w-5 h-5 text-black' /> Screen
                    tenants.
                  </li>
                  <li className='flex items-center gap-2'>
                    <BadgeCheckIcon className='w-5 h-5 text-black' /> Sign a
                    lease.
                  </li>
                  <li className='flex items-center gap-2'>
                    <BadgeCheckIcon className='w-5 h-5 text-black' /> Get paid.
                  </li>
                </ul>
                <div className='mt-2'>All in one place!</div>
              </div>
            }
            btnText='Post your first listing free'
          />
          <div className='flex flex-col items-center justify-center h-96'>
            <div className='text-4xl font-bold tracking-tighter text-luxury'>
              Most visited rental network
            </div>
            <div className='max-w-lg mt-4 text-center tex-gray-600'>
              Zillow Rentals is the most visited rental network with more than{' '}
              <strong className='whitespace-nowrap text-primary-500'>
                194 million
              </strong>{' '}
              average monthly unique users in Q2 2019.
            </div>
            <button
              className='flex items-center px-8 py-3 mt-6 font-semibold text-white capitalize rounded-full bg-primary-500' // bg-gradient-to-tr from-primary-400 to-primary-600
              type='button'
            >
              join now
            </button>
            {/* <ChevronRightIcon className='inline w-6 h-6 ml-3 ' /> */}
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='h-12'
              alt=''
              src='https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/2/2020/05/Zillow_Sites2x-cd3144-c697dc-fbb28e.png'
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
