import {
  ssrExchange,
  fetchExchange,
  dedupExchange,
  createClient,
  cacheExchange,
  Exchange,
  Operation,
} from 'urql'
import { devtoolsExchange } from '@urql/devtools'

import { getToken } from 'src/store/user/userHooks'
import { pipe, mergeMap, fromPromise, map } from 'wonka'

const isServerSide = typeof window === 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide })

// eslint-disable-next-line no-undef
type FetchOptions = RequestInit | (() => RequestInit)
export const fetchOptionsExchange =
  (promise: (fetchOptions?: FetchOptions) => Promise<FetchOptions>): Exchange =>
  ({ forward }) =>
  (ops$) =>
    pipe(
      ops$,
      mergeMap((operation: Operation) => {
        const result = promise(operation.context.fetchOptions)

        return pipe(
          fromPromise(result),
          map((fetchOptions: FetchOptions) => ({
            ...operation,
            context: {
              ...operation.context,
              fetchOptions,
            },
          }))
        )
      }),
      forward
    )

const client = createClient({
  url: process.env.NEXT_PUBLIC_API_URL + '/graphql',
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    cacheExchange,
    ssrCache,
    // Must be called before fetchExchange and after all others sync exchanges, respecting the rule Synchronous first, Asynchronous last
    fetchOptionsExchange(async (fetchOptions: any) => {
      const token = await getToken()
      const headers = token ? { Authorization: `Bearer ${token}` } : {}
      return {
        ...fetchOptions,
        headers,
      }
    }),
    fetchExchange,
  ],
})

export { client, ssrCache }
