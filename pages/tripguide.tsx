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
    <div className='min-h-screen mt-12 bg-primary-25'>
      <Container className='flex flex-col justify-center h-full'>
        <TripGuide />
      </Container>
    </div>
  </div>
)

export default NotFoundPage
