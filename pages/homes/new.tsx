/**
 *
 * Idea: The components don't have to use hooks that query data when state changes.
 * We should use observables.
 *
 * How to do ComponentDidMount???
 */

import { NextPage } from 'next'
import Container from 'src/components/atoms/Container'
import AddNewHomeTemplate from 'src/components/templates/AddNewHomeTemplate'
import { NextSeo } from 'next-seo'

const NewHome: NextPage = () => (
  <>
    <NextSeo
      title='🏡 Home. Zillow clone - Karthick Ragavendran'
      description='This is the amazing sample page. A short description goes here which says what goes here.'
    />
    <Container>
      <AddNewHomeTemplate />
    </Container>
  </>
)

export default NewHome
