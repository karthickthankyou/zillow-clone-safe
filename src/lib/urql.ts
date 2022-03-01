import { createClient, defaultExchanges } from 'urql'
import { devtoolsExchange } from '@urql/devtools'

// const headers = token
//   ? {
//       Authorization: `Bearer ${token}`,
//     }
//   : {}
export const createUrqlClient = () =>
  createClient({
    url: 'https://zillow-karthick.herokuapp.com/v1/graphql',
    exchanges: [devtoolsExchange, ...defaultExchanges],
    // fetchOptions: {
    //   // @ts-ignore
    //   headers,
    // },
  })
