import BannerSplit from 'src/components/organisms/BannerHomeLoan'
import BadgeCheckIcon from '@heroicons/react/outline/BadgeCheckIcon'
import { MapProvider } from 'src/store/map/mapContext'
import ScrollText from 'src/components/molecules/ScrollBanner'
import Mapbox from 'src/components/organisms/Mapbox'
import TripGuide from 'src/components/organisms/TripGuide'
import {
  //   CityMarkers,
  Fetching,
  HomeMarkers,
  Panel,
  PanelContainer,
  Error,
  //   StateMarkers,
} from 'src/components/organisms/MapboxContent/MapboxContent'
import { useScrollTo } from 'src/hooks'
import Container from 'src/components/atoms/Container'
import { DefaultZoomControls as ZoomControls } from 'src/components/organisms/ZoomControls/ZoomControls'

import Tooltip from 'src/components/atoms/Tooltip/Tooltip'
import Link from 'src/components/atoms/Link'
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
          <div className='max-w-md mt-4 text-gray-600'>
            Whether you’re{' '}
            <ScrollText
              input={['buying', 'selling', 'renting']}
              className='font-bold text-primary-600 '
            />
            , we can help you move forward.
          </div>
        </Container>

        <div
          className='w-screen mb-24 h-screen80 md:h-screen'
          ref={interactiveMapRef}
        >
          <MapProvider className='h-full'>
            <Mapbox>
              <HomeMarkers />
              {/* <CityMarkers />
              <StateMarkers /> */}

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
        <div className='mb-16 bg-primary-25'>
          <Container>
            <div className='pt-6 text-xl font-medium'>Trip guide</div>
            <div className='max-w-md mt-2 text-sm text-gray-600'>
              Dont get lost in the endless menu items. Follow this trip guide
              that shows the working pages of the application.
            </div>
            <div className='mt-4 text-sm text-gray-600'>
              Thank you, <br />{' '}
              <a
                className='text-black'
                rel='noreferrer'
                href='https://www.iamkarthick.com'
                target='_blank'
              >
                Karthick Ragavendran.
              </a>
            </div>
            <TripGuide />
          </Container>
        </div>

        <div className='container mx-auto mt-12 space-y-24'>
          <BannerSplit>
            <BannerSplit.Heading>Zillow Home Loans</BannerSplit.Heading>
            <BannerSplit.Description className='mt-4'>
              <div>
                Get pre-approved and take a big step toward buying your new
                home.
              </div>
            </BannerSplit.Description>
            <Tooltip
              placement='top'
              arrow
              text='white'
              bg='black'
              title='Feature not implemented.'
            >
              <button
                className='flex items-center px-8 py-3 mt-8 font-semibold text-white capitalize rounded-full bg-primary-500' // bg-gradient-to-tr from-primary-400 to-primary-600
                type='button'
              >
                Request Pre approval
              </button>
            </Tooltip>
          </BannerSplit>
          <BannerSplit
            reverse
            src='https://res.cloudinary.com/thankyou/image/upload/v1640726673/nike/people/austin-distel-va_Opp86kfQ-unsplash_avexl4.jpg'
          >
            <BannerSplit.Heading>Find an Agent</BannerSplit.Heading>
            <BannerSplit.Description className='mt-4'>
              <div>
                Zillow&apos;s directory of local real estate agents and brokers
                connects you with professionals who can help meet your needs.
              </div>
            </BannerSplit.Description>
            <Tooltip
              placement='top'
              arrow
              text='white'
              bg='black'
              title='Feature implementation in progress.'
            >
              <Link
                className='inline-block px-8 py-3 mt-8 font-semibold text-white capitalize rounded-full bg-primary-500' // bg-gradient-to-tr from-primary-400 to-primary-600
                href='/agents'
              >
                Find agents
              </Link>
            </Tooltip>
          </BannerSplit>
          <BannerSplit>
            <BannerSplit.Heading>Zillow Rental Manager</BannerSplit.Heading>
            <BannerSplit.Description className='mt-4'>
              <ul>
                <li className='flex items-center gap-2'>
                  <BadgeCheckIcon className='w-5 h-5' /> List your rental.
                </li>
                <li className='flex items-center gap-2'>
                  <BadgeCheckIcon className='w-5 h-5' /> Screen tenants.
                </li>
                <li className='flex items-center gap-2'>
                  <BadgeCheckIcon className='w-5 h-5' /> Sign a lease.
                </li>
                <li className='flex items-center gap-2'>
                  <BadgeCheckIcon className='w-5 h-5' /> Get paid.
                </li>
              </ul>
              <div className='mt-2'>All in one place!</div>
            </BannerSplit.Description>
            <button
              type='button'
              className='px-4 py-2 mt-8 border rounded-full text-primary-600 border-primary-600'
            >
              Post your first listing free
            </button>
          </BannerSplit>
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
            <Link
              className='flex items-center px-8 py-3 mt-6 font-semibold text-white capitalize rounded-full bg-primary-500' // bg-gradient-to-tr from-primary-400 to-primary-600
              href='/signup'
            >
              join now
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
