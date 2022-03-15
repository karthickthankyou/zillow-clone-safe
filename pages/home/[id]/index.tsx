import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import ProductPageTemplate from 'src/components/templates/ProductPage/ProductPage'
import { client, ssrCache } from 'src/config/urqlClient'
import { GetHomeDocument, useGetHomeQuery } from 'src/generated/graphql'
import { useHomesDetailed } from 'src/store/home/homeNetwork'

import { useRouter } from 'next/router'
import { getQueryParam } from 'src/lib/util'

const ProductPage = () => {
  useHomesDetailed()
  const id = getQueryParam(useRouter().query.id)
  const [home] = useGetHomeQuery({
    variables: {
      id: +(id || -999),
    },
    pause: !id,
  })
  const homeData = home.data?.homes_by_pk
  return <ProductPageTemplate homeData={homeData} />
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
  await client?.query(GetHomeDocument, { id }).toPromise()
  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  }
}

export default ProductPage
