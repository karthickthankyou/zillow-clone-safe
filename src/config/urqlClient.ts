import {
  ssrExchange,
  fetchExchange,
  dedupExchange,
  createClient,
  cacheExchange,
} from 'urql'
import { devtoolsExchange } from '@urql/devtools'

const isServerSide = typeof window === 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide })

const client = createClient({
  url: 'https://zillow-karthick.herokuapp.com/v1/graphql',
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    cacheExchange,
    ssrCache,
    fetchExchange,
  ],
  fetchOptions: () => ({ headers: {} }),
})

export { client, ssrCache }
