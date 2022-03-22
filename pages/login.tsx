import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Login from 'src/components/templates/Login/Login'

import { useRedirectLoggedInUsers } from 'src/hooks'

const LoginPage: NextPage = () => {
  useRedirectLoggedInUsers()

  return (
    <div>
      <NextSeo
        title='Zillow clone - Login page'
        description='This is the amazing sample page. A short description goes here which says what goes here.'
      />
      <Login />
    </div>
  )
}

export default LoginPage
