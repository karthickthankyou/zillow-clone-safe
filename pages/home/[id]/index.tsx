import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
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

interface Params extends ParsedUrlQuery {
  id: string
}

// This function gets called at build time
export const getStaticProps: GetStaticProps<{}, Params> = async (context) => {
  // Call an external API endpoint to get posts

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time

  const id = context.params?.id
  await client.query(GetHomeDocument, { id }).toPromise()
  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  }
}

export default ProductPage
