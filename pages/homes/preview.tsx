/**
 *
 * Idea: The components don't have to use hooks that query data when state changes.
 * We should use observables.
 *
 * How to do ComponentDidMount???
 */

import { NextPage } from 'next'
import Container from 'src/components/atoms/Container'
import ProductPage from 'src/components/templates/ProductPage'
import { NextSeo } from 'next-seo'

const PreviewHome: NextPage = () => (
  <>
    <NextSeo
      title='Previewing new home | Zillow clone - Karthick Ragavendran'
      description='This is the amazing sample page. A short description goes here which says what goes here.'
    />
    <Container>
      <ProductPage
        home={{
          fetching: false,
          stale: false,
          data: {
            homes_by_pk: {
              id: 12,
              priceSqft: 12,
              createdAt: '2020-01-01',
              updatedAt: '2020-01-01',
              address:
                '6046 M J Taylor Road, Hahira, Georgia 31632, United States',
              bath: 1,
              beds: 1,
              city: 'Hahira',
              description: 'Goood house.',
              facts: '',
              features: 'yes.',
              lat: 31.03866,
              lng: -83.45001,
              lotSize: 1200,
              price: 878,
              sqft: 1000,
              state: 'Georgia',
              style: 'Single_Family_Home',
              yearBuilt: 1999,
              zipcode: '31632',
            },
          },
        }}
      />
    </Container>
  </>
)

export default PreviewHome
