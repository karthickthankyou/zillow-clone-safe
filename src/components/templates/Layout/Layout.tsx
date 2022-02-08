import { ReactElement, useEffect } from 'react'
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav'
import { useRouter } from 'next/router'
import Navbar from '../../organisms/Navbar'
import Footer from '../../organisms/Footer'

interface ILayoutProps {
  children: ReactElement | ReactElement[]
}

const Layout = ({ children }: ILayoutProps) => {
  const url = useRouter().pathname

  useEffect(() => {
    console.log('Url has changed: ', url)
  }, [url])
  return (
    <>
      <SkipNavLink className='absolute z-50 opacity-0 focus:opacity-70'>
        Skip
      </SkipNavLink>
      <Navbar />
      <main>
        <SkipNavContent />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
