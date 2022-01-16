import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import SignIn from 'src/components/templates/SignIn'

const Login: NextPage = () => (
  <div>
    <NextSeo
      title='Zillow clone - Login page'
      description='This is the amazing sample page. A short description goes here which says what goes here.'
    />
    <SignIn />
  </div>
)

export default Login
