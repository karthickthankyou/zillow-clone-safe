import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import SignUp from 'src/components/templates/Signup'

const Signup: NextPage = () => (
  <div>
    <NextSeo
      title='Next boilerplate - Sample page.'
      description='This is the amazing sample page. A short description goes here which says what goes here.'
    />
    <SignUp />
  </div>
)

export default Signup
