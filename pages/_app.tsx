import type { AppProps } from 'next/app'
import {
  createClient,
  Provider as UrqlProvider,
  defaultExchanges,
  cacheExchange,
} from 'urql'
import { ssrCache } from 'src/config/urqlClient'

import { devtoolsExchange } from '@urql/devtools'

import { Provider as ReduxProvider } from 'react-redux'
import Layout from 'src/components/templates/Layout'

import 'src/globals.css'

import Notifications from 'src/components/molecules/Notification'
import { useAuth, useUserListener } from 'src/store/user/userHooks'
import { useDebouncedDispatch, useLongHoverDispatch } from 'src/hooks'
import { useGetWishlisted } from 'src/store/userHome/userHomeHooks'
import { store } from '../src/store'

// if (process.env.NEXT_PUBLIC_API_MOCKING) {
//   import('../src/mocks').then(({ setupMockServer }) => {
//     setupMockServer()
//   })
// }

// const wsClient = createWSClient({
//   url: 'ws://zillow-karthick.herokuapp.com/v1/graphql',
// })
// subscriptionExchange({
//   forwardSubscription: (operation) => ({
//     subscribe: (sink) => ({
//       unsubscribe: wsClient.subscribe(operation, sink),
//     }),
//   }),
// }),

const Global = () => {
  useDebouncedDispatch()
  useLongHoverDispatch()
  useGetWishlisted()

  return null
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { user, token, claims } = useAuth()
  const headers = token && { Authorization: `Bearer ${token}` }
  console.log('Headers: ', headers, user, claims)

  // const cache = cacheExchange({
  //   optimistic: {
  //     favoriteTodo: (variables, cache, info) => ({
  //       __typename: 'Todo',
  //       id: variables.id,
  //       favorite: true,
  //     }),
  //   },
  // })

  const client = createClient({
    url: 'https://zillow-karthick.herokuapp.com/v1/graphql',
    exchanges: [devtoolsExchange, ...defaultExchanges],
    fetchOptions: {
      headers,
    },
  })

  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
    <UrqlProvider value={client}>
      <ReduxProvider store={store}>
        <Layout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
          <Global />
          <Notifications />
        </Layout>
      </ReduxProvider>
    </UrqlProvider>
  )
}

export default MyApp

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
 */
