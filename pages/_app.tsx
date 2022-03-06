import type { AppProps } from 'next/app'
import { createClient, Provider as UrqlProvider, defaultExchanges } from 'urql'
import { devtoolsExchange } from '@urql/devtools'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from 'src/config/firebase'
import { Provider as ReduxProvider } from 'react-redux'
import Layout from 'src/components/templates/Layout'
import 'src/globals.css'

import { store } from '../src/store'

// if (process.env.NEXT_PUBLIC_API_MOCKING) {
//   import('../src/mocks').then(({ setupMockServer }) => {
//     setupMockServer()
//   })
// }

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [token, settoken] = useState('')

  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const jwtToken = await user.getIdToken()
          settoken(jwtToken)

          // const idTokenResult = await user.getIdTokenResult()
          // const hasuraClaim =
          //   idTokenResult.claims['https://hasura.io/jwt/claims']
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
    exchanges: [devtoolsExchange, ...defaultExchanges],
    fetchOptions: {
      // @ts-ignore
      headers,
    },
  })

  return (
    <UrqlProvider value={client}>
      <ReduxProvider store={store}>
        <Layout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Layout>
      </ReduxProvider>
    </UrqlProvider>
  )
}

export default MyApp
