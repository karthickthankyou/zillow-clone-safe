import { ReactElement, useEffect } from 'react'
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav'
import { useUserListener } from 'src/store/user/userHooks'

import Navbar from '../../organisms/Navbar'
import Footer from '../../organisms/Footer'

interface ILayoutProps {
  children: ReactElement | ReactElement[]
}

const Layout = ({ children }: ILayoutProps) => {
  useUserListener()

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
