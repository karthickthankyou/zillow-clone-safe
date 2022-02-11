import { devtoolsExchange } from '@urql/devtools'
import { createClient, defaultExchanges } from 'urql'

export const client = createClient({
  url: 'https://zillow-karthick.herokuapp.com/v1/graphql',
  exchanges: [devtoolsExchange, ...defaultExchanges],
  fetchOptions: {
    // @ts-ignore
    headers,
  },
})
