import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Container from 'src/components/atoms/Container/Container'
import TripGuide from 'src/components/organisms/TripGuide/TripGuide'

const NotFoundPage: NextPage = () => (
  <div>
    <NextSeo
      title='NotFound page - Ikea clone | Karthick Ragavendran'
      description='Create account with your email or google account.'
    />
    <div className='min-h-screen mt-12'>
      <Container className='flex flex-col justify-center h-full'>
        <div className='max-w-sm'>
          <div className='text-lg font-semibold'>404 | Page not found.</div>
          <div className='mt-8 mb-16 text-gray-600'>
            Meanwhile, follow the <span className='text-red'>site map</span>{' '}
            below for amazing things you can do in this site right now.
          </div>
        </div>
        <TripGuide />
      </Container>
    </div>
  </div>
)

export default NotFoundPage
