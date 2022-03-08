import type { AppProps } from 'next/app'
import {
  createClient,
  Provider as UrqlProvider,
  defaultExchanges,
  cacheExchange,
} from 'urql'

import { devtoolsExchange } from '@urql/devtools'

import { Provider as ReduxProvider } from 'react-redux'
import Layout from 'src/components/templates/Layout'

import 'src/globals.css'

import Notifications from 'src/components/molecules/Notification'
import { useGetAuthHeader } from 'src/store/user/userHooks'
import { store } from '../src/store'
import { useDebouncedDispatch } from 'src/hooks'

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

const MyApp = ({ Component, pageProps }: AppProps) => {
  const headers = useGetAuthHeader()

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

  return (
    <UrqlProvider value={client}>
      <ReduxProvider store={store}>
        <Layout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
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
 */
