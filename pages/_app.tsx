import type { AppProps } from 'next/app'
import {
  createClient,
  Provider,
  defaultExchanges,
  fetchExchange,
  dedupExchange,
} from 'urql'
import { devtoolsExchange } from '@urql/devtools'
import { cacheExchange } from '@urql/exchange-graphcache'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from 'src/config/firebase'
import 'src/globals.css'
import { Provider as ReduxProvider } from 'react-redux'
import Layout from 'src/components/templates/Layout'

import Streams from 'src/components/molecules/Streams'
import { store } from '../src/store'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [token, settoken] = useState('')

  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const jwtToken = await user.getIdToken()
          settoken(jwtToken)

          const idTokenResult = await user.getIdTokenResult()
          const hasuraClaim =
            idTokenResult.claims['https://hasura.io/jwt/claims']
        } else {
          settoken('')
        }
      }),
    []
  )

  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {}

  const client = createClient({
    url: 'https://zillow-karthick.herokuapp.com/v1/graphql',
    exchanges: [
      ...defaultExchanges,
      dedupExchange,
      devtoolsExchange,
      cacheExchange({}),
      fetchExchange,
    ],
    fetchOptions: {
      // @ts-ignore
      headers,
    },
  })
  return (
    <Provider value={client}>
      <ReduxProvider store={store}>
        <Layout>
          <Streams />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Layout>
      </ReduxProvider>
    </Provider>
  )
}

export default MyApp
