import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import ProductPageTemplate from 'src/components/templates/ProductPage/ProductPage'
import { client, ssrCache } from 'src/config/urqlClientWonka'
import { GetHomeDocument, useGetHomeQuery } from 'src/generated/graphql'

import { useRouter } from 'next/router'
import { getQueryParam } from 'src/lib/util'
import { useAppDispatch } from 'src/store'
import { setViewport } from 'src/store/map/mapSlice'
import { useEffect } from 'react'
import { setHighlightedHomeId } from 'src/store/home/homeSlice'
import { useHomesDetailed } from 'src/store/home/homeNetwork'

const ProductPage = () => {
  useHomesDetailed()
  const id = +(getQueryParam(useRouter().query.id), '-1')
  const [home] = useGetHomeQuery({
    variables: { id },
  })
  const dispatch = useAppDispatch()

  const homeId = home.data?.homes_by_pk?.id
  const lat = home.data?.homes_by_pk?.lat
  const lng = home.data?.homes_by_pk?.lng

  useEffect(() => {
    dispatch(setHighlightedHomeId(homeId))
    if (!lat || !lng) return
    dispatch(
      setViewport({
        latitude: lat,
        longitude: lng,
        zoom: 11,
      })
    )
  }, [dispatch, homeId, lat, lng])

  const homeData = home.data?.homes_by_pk
  console.log(homeData)

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
  console.log('getStaticProps', id)
  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  }
}

export default ProductPage
