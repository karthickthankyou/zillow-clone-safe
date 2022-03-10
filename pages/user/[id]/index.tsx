import { useRedirectUnAuthenticatedUsers } from 'src/hooks'
import { GetStaticPaths, GetStaticProps } from 'next'
import MyAccount from 'src/components/templates/MyAccount'
import { ParsedUrlQuery } from 'querystring'

const UserpagePage = () => {
  useRedirectUnAuthenticatedUsers()
  return <MyAccount />
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
})

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<{}, Params> = async (context) => {
  const id = context.params?.id

  return {
    props: {},
  }
}

export default UserpagePage
