import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { useAppSelector } from 'src/store'
import { selectDisplayName } from 'src/store/user/userSlice'
import Link from 'src/components/atoms/Link'
import Container from 'src/components/atoms/Container'

const Spaced = ({ children }: { children: React.ReactNode }) => (
  <div className='max-w-md mt-6 mb-12 space-y-3'>{children}</div>
)

const ProjectIntroduction: NextPage = () => {
  const userDisplayName = useAppSelector(selectDisplayName)

  return (
    <div>
      <NextSeo
        title='Zillow clone - Karthick Ragavendran'
        description='This is the amazing sample page. A short description goes here which says what goes here.'
      />
      <Container className='h-screen'>
        <div className='mt-24 font-serif text-4xl font-medium'>
          Hello, {userDisplayName || 'Visitor'}.
        </div>
        <Spaced>
          <p className='max-w-md text-sm text-gray-800'>
            I am Karthick Ragavendran. Thanks for trying out this demo web
            application!
          </p>
          <p className='max-w-md text-sm text-gray-800'>
            This application is not complete. There are a lot of features I am
            planning to build to match any existing production grade
            application.
          </p>
          <p className='max-w-md text-sm text-gray-800'>
            The below are the things you can do right now.
          </p>
        </Spaced>
        <Spaced>
          <Link className='text-xl font-medium' href='/'>
            Home page
          </Link>
          <p>
            There are some show case sections with an interactive map component.
          </p>
        </Spaced>
        <Spaced>
          <Link className='text-xl font-medium' href='/'>
            Search page
          </Link>
          <p>
            We use react hook forms to create an amazing experience for the
            users as well as the developers.
          </p>
        </Spaced>
        <Spaced>
          <Link className='text-xl font-medium' href='/'>
            Product page
          </Link>
          <p>
            We use react hook forms to create an amazing experience for the
            users as well as the developers.
          </p>
        </Spaced>
      </Container>
    </div>
  )
}

export default ProjectIntroduction
