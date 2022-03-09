import Home from 'src/components/templates/ProductPage/ProductPage'
import { client, ssrCache } from 'src/config/urqlClient'
import { GetHomeDocument } from 'src/generated/graphql'
import { useHomesDetailed } from 'src/store/home/homeNetwork'

const ProductPage = () => {
  useHomesDetailed()
  return <Home />
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

// This function gets called at build time
export async function getStaticProps(context) {
  // Call an external API endpoint to get posts

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time

  const { id } = context.params
  await client.query(GetHomeDocument, { id }).toPromise()
  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  }
}

export default ProductPage
