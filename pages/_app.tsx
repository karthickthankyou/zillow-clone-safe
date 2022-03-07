import type { AppProps } from 'next/app'
import { createClient, Provider as UrqlProvider, defaultExchanges } from 'urql'
import { devtoolsExchange } from '@urql/devtools'

import { Provider as ReduxProvider } from 'react-redux'
import Layout from 'src/components/templates/Layout'

import 'src/globals.css'

import Notifications from 'src/components/molecules/Notification'
import { useGetAuthHeader } from 'src/store/user/userHooks'
import { store } from '../src/store'

// if (process.env.NEXT_PUBLIC_API_MOCKING) {
//   import('../src/mocks').then(({ setupMockServer }) => {
//     setupMockServer()
//   })
// }

const MyApp = ({ Component, pageProps }: AppProps) => {
  const headers = useGetAuthHeader()

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
