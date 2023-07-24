/**
 *
 * Idea: The components don't have to use hooks that query data when state changes.
 * We should use observables.
 *
 * How to do ComponentDidMount???
 */

import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { client, ssrCache } from 'src/config/urqlClientWonka'
import { GetHomeDocument, useGetHomeQuery } from 'src/generated/graphql'
import { getQueryParam } from 'src/lib/util'

const EditPage: NextPage = () => {
  const id = parseInt(getQueryParam(useRouter().query.id), 10)
  const [home] = useGetHomeQuery({
    variables: { where: { id } },
  })

  return <div>Hello edit page. {home.data?.property.id} </div>
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
  await client?.query(GetHomeDocument, { id }).toPromise()

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

export default EditPage
