import { useRedirectUnAuthenticatedUsers } from 'src/hooks'
import MyAccount from 'src/components/templates/MyAccount'

const UserpagePage = () => {
  useRedirectUnAuthenticatedUsers()
  return <MyAccount />
}

export default UserpagePage
