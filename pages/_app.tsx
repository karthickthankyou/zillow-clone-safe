/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app'

import { Provider as ReduxProvider } from 'react-redux'
import Layout from 'src/components/templates/Layout'
import Notifications from 'src/components/molecules/Notification'

import { useDebouncedDispatch, useLongHoverDispatch } from 'src/hooks'
import { useGetWishlisted } from 'src/store/userHome/userHomeHooks'
import UrqlProvider, {
  ssrCache,
} from 'src/components/templates/UrqlProvider/UrqlProvider'
import { store } from 'src/store'
import 'src/globals.css'
import React from 'react'
import { useUserListener } from 'src/store/user/userHooks'

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

const App = ({ Component, pageProps }: AppProps) => (
  <ReduxProvider store={store}>
    <UrqlProvider>
      <Layout>
        <AppLevelHooks />
        <Notifications />
        <Component {...pageProps} />
      </Layout>
    </UrqlProvider>
  </ReduxProvider>
)

export default App

/**
 * Getting the subscriptions to work in urql with hasura is hard.
 * https://github.com/hasura/graphql-engine/discussions/6996
 *
 * Good urql post:
 * https://levelup.gitconnected.com/urql-the-highly-customizable-and-versatile-graphql-client-69e4e3406904
 *
 * Offline support:
 * https://formidable.com/open-source/urql/docs/graphcache/offline/
 *
 * About firebase JWT expire.
 * https://github.com/hasura/graphql-engine/issues/1062
 *
 * About JWT by hasura
 * https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/
 */

/**
 * Urql exchange with Firebase
 * https://gist.github.com/acro5piano/c911361b3da1e6b871214fe7c100e08c
 *
 *
 * Urql fetch options exchange.
 * https://github.com/FormidableLabs/urql/issues/234
 */
