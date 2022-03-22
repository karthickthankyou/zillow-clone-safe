import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Signin from 'src/components/templates/Signin/Signin'
import { useRedirectLoggedInUsers } from 'src/hooks'

const Login: NextPage = () => {
  useRedirectLoggedInUsers()

  return (
    <div>
      <NextSeo
        title='Zillow clone - Login page'
        description='This is the amazing sample page. A short description goes here which says what goes here.'
      />
      <Signin />
    </div>
  )
}

export default Login
