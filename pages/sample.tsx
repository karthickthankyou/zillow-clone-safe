import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const OfflinePage: NextPage = () => (
  <div>
    <NextSeo
      title='🏡 Next boilerplate - Sample page.'
      description='This is the amazing sample page. A short description goes here which says what goes here.'
    />
    This is sample page
  </div>
)

export default OfflinePage
