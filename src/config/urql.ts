import { devtoolsExchange } from '@urql/devtools'
import { createClient, defaultExchanges } from 'urql'

// const headers = ''

export const client = createClient({
  url: 'https://zillow-karthick.herokuapp.com/v1/graphql',
  exchanges: [devtoolsExchange, ...defaultExchanges],
})
