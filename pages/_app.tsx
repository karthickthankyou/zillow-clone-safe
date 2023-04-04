/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app'

import { Provider as ReduxProvider } from 'react-redux'
import Layout from 'src/components/templates/Layout'
import Notifications from 'src/components/molecules/Notification'

import { useDebouncedDispatch, useLongHoverDispatch } from 'src/hooks'
import { useGetWishlisted } from 'src/store/userHome/userHomeHooks'
import { store } from 'src/store'
import 'src/globals.css'
import { useUserListener } from 'src/store/user/userHooks'
import { ApolloProvider } from 'src/config/apollo'

/** Enable mocking
 * if (process.env.NEXT_PUBLIC_API_MOCKING) {
    import('../src/mocks').then(({ setupMockServer }) => {
      setupMockServer()
    })
  }
 */

export const AppLevelHooks = () => {
  useUserListener()
  useDebouncedDispatch()
  useLongHoverDispatch()
  useGetWishlisted()

  return null
}

export const AppLevelHooksWithoutAuth = () => {
  useDebouncedDispatch()
  useLongHoverDispatch()
  useGetWishlisted()

  return null
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ReduxProvider store={store}>
    <ApolloProvider>
      <Layout>
        <AppLevelHooks />
        <Notifications />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  </ReduxProvider>
)

export default MyApp
