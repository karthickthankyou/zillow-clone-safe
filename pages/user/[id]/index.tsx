import { useRedirectUnAuthenticatedUsers } from 'src/hooks'
import MyAccount from 'src/components/templates/MyAccount'

const UserpagePage = () => {
  useRedirectUnAuthenticatedUsers()
  return <MyAccount />
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps(context) {
  const { id } = context.params
  console.log('id', id)
  return {
    props: {},
  }
}

export default UserpagePage
