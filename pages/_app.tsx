import type { AppProps } from 'next/app'
import { createClient, Provider, defaultExchanges } from 'urql'
import { devtoolsExchange } from '@urql/devtools'
import { cacheExchange } from '@urql/exchange-graphcache'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from 'src/lib/firebase'
import 'src/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [token, settoken] = useState('')
  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        console.log('Auth changed. User: ', user)

        if (user) {
          const jwtToken = await user.getIdToken()
          settoken(jwtToken)

          const idTokenResult = await user.getIdTokenResult()
          const hasuraClaim =
            idTokenResult.claims['https://hasura.io/jwt/claims']
          console.log(hasuraClaim)
        } else {
          console.log('no user')

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
    exchanges: [...defaultExchanges, devtoolsExchange, cacheExchange({})],
    fetchOptions: {
      // @ts-ignore
      headers,
    },
  })
  return (
    <Provider value={client}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
