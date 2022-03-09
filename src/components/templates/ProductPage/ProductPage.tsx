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

export interface IProductPageProps {}

const ProductPage = () => (
  <div className='container mx-auto '>
    <div className='grid grid-cols-3 gap-3'>
      <div className='col-span-2 space-y-12'>
        <ProductPageCarousel />
        <Details title='Facts and features' content={featuresData} />
        <div>
          <div className='mb-4 text-xl'>About</div>
          <div className='max-w-lg leading-relaxed text-gray-800'>
            Incredible Three Family Dwelling With Contemporary Stone Detailing,
            Unrivaled Curb Appeal Sits On Well-Kept Property In A Desirable
            Neighborhood. A Bright Entryway Welcomes You To The Main Floor,
            Second Floor Or Third Floor Units With Rich Hardwood Floors,
            Impeccable Molding, And Designer Details Throughout. Entertain
            Guests In The Large And Inviting Living Areas With Gorgeous Sun Lit
            Rooms And Sleek Kitchens/ Bathrooms. Great Opportunity For Families
            And Or Investors Looking For Income Producing Assets. Come Check It
            Out!
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Panel className='space-y-12'>
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
                <Details title='Financial Details' content={financialDetails} />
                <Details title='Other Details' content={otherDetails} />
              </Disclosure.Panel>
              <Disclosure.Button className='w-full py-2 rounded-lg bg-primary-100'>
                See {open ? 'less' : 'more'}
              </Disclosure.Button>
            </>
          )}
        </Disclosure>
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
        <div className='grid grid-cols-2 gap-3'>
          <div>
            <div className='text-xl font-bold'>Get a call back.</div>
            <div className='mb-3 text-gray-800'>
              Connect with a local buyer’s agent who advertises with Zillow.
            </div>
          </div>
          <form>
            <div className='mb-2'>
              <label className='mb-1' htmlFor='name'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter name'
                className='w-full p-2 border rounded text-grey-700'
              />
            </div>
            <div className='mb-2'>
              <label className='mb-1 d-block' htmlFor='email'>
                Email
              </label>
              <input
                type='text'
                name='email'
                id='email'
                placeholder='Enter email'
                className='w-full p-2 border rounded text-grey-700'
              />
            </div>
            <div className='mb-2'>
              <label className='mb-1 ' htmlFor='phone'>
                Phone
              </label>
              <input
                type='text'
                name='phone number'
                id='phone number'
                placeholder='Enter phone number'
                className='w-full p-2 border rounded text-grey-700'
              />
            </div>
            <div className='mb-2'>
              <label className='mb-1 d-block' htmlFor='message'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                cols={30}
                rows={4}
                placeholder='Enter the message'
                className='block w-full p-2 border rounded'
              />
            </div>
            <button
              className='px-2 py-1 text-white rounded bg-primary-500'
              type='submit'
            >
              Contact
            </button>
          </form>
        </div>
      </div>

      <div className='col-span-1 '>
        <div className='sticky top-0 p-6 rounded-lg bg-striped'>
          <div className='text-xs tracking-wide text-gray-600 uppercase'>
            for sale
          </div>
          <div className='mt-1 text-gray-600'>
            111-61 44th Ave, Corona, NY 11368
          </div>

          <h2 className='mt-6 text-4xl'>$1,998,888</h2>
          <div className='flex flex-wrap mt-1 '>
            <div>
              <span>7 </span>
              <span className='text-base'>bd</span>
            </div>
            <span className='mx-1 text-gray-300'>•</span>
            <div>
              <span>6 </span>
              <span className='text-base'>ba</span>
            </div>
            <span className='mx-1 text-gray-300'>•</span>
            <div>
              <span>7,508 </span>
              <span className='text-base'>sqft</span>
            </div>
            <span className='mx-1 text-gray-300'>•</span>
            <div>
              <span>6.40 </span>
              <span className='text-base'>acre lot</span>
            </div>
          </div>

          <div className='mt-6'>
            <div>Est. payment: $9,031/mo</div>
            <Link className='flex items-center mt-1 text-primary-600' href='/'>
              <CurrencyDollarIcon className='inline w-5 h-5 mr-1' /> Get
              pre-qualified
            </Link>
          </div>
          <div className='flex items-center gap-3 mt-6'>
            <Image
              className='flex-shrink-0 w-12 h-12 rounded-full'
              alt=''
              src='https://res.cloudinary.com/thankyou/image/upload/v1641010165/nike/austin-distel-7uoMmzPd2JA-unsplash_drbcgg.jpg'
            />
            <div>
              <div className='text-clip'>
                Tim Ranallo
                {/* - NY Licensed R.E. Salesperson */}
              </div>
              <div className='text-sm text-gray-600 text-clip'>
                Hunt Real Estate
              </div>
            </div>
          </div>
          <button
            className='w-full px-3 py-3 mt-3 rounded-md bg-luxury'
            type='button'
          >
            Contact agent
          </button>
        </div>
      </div>
      <Cities title='Near by homes'>
        {['Hello', 'World'].map((item) => (
          <div className='my-12' key={item}>
            {item}
          </div>
        ))}
      </Cities>
      <HScroll>
        <HScroll.Body>
          {['Hello', 'World'].map((item) => (
            <div className='my-12' key={item}>
              {item}
            </div>
          ))}
        </HScroll.Body>
      </HScroll>
    </div>
  </div>
)

export default ProductPage
