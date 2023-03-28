import { GetStaticProps } from 'next'

import { ParsedUrlQuery } from 'querystring'
import ProductPageTemplate from 'src/components/templates/ProductPage/ProductPage'
import { client, ssrCache } from 'src/config/urqlClientWonka'
import {
  PropertyDocument,
  PropertyQuery,
  PropertyQueryVariables,
  usePropertyQuery,
} from 'src/generated/graphql'

import { useRouter } from 'next/router'
import { getQueryParam } from 'src/lib/util'
import { useAppDispatch } from 'src/store'
import { setViewport } from 'src/store/map/mapSlice'
import { useEffect } from 'react'
import { setHighlightedHomeId } from 'src/store/home/homeSlice'
import { useHomesDetailed } from 'src/store/home/homeNetwork'

const ProductPage = () => {
  useHomesDetailed()

  const id = parseInt(getQueryParam(useRouter().query.id), 10)
  const [home] = usePropertyQuery({
    variables: { where: { id: +id } },
  })

  console.log('---Home ', home)
  const dispatch = useAppDispatch()

  const homeId = home.data?.property?.id
  const lat = home.data?.property?.lat
  const lng = home.data?.property?.lng

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

  const router = useRouter()

  useEffect(() => {
    if (!home.fetching && !home.data?.property) {
      router.push('/404')
    }
  }, [home.data?.property, home.fetching, router])

  return <ProductPageTemplate home={home} />
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

interface Params extends ParsedUrlQuery {
  id: string
}

// This function gets called at build time
export const getStaticProps: GetStaticProps<{}, Params> = async (context) => {
  const id = context.params?.id || -90
  await client
    ?.query<PropertyQuery, PropertyQueryVariables>(PropertyDocument, {
      where: { id: +id },
    })
    .toPromise()

  const props = {
    props: JSON.parse(
      JSON.stringify({
        urqlState: ssrCache.extractData() || null,
      })
    ),
  }

  return {
    props,
  }
}

export default ProductPage
