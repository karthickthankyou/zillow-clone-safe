import {
  ssrExchange,
  fetchExchange,
  dedupExchange,
  createClient,
  cacheExchange,
  makeOperation,
  Exchange,
  Operation,
} from 'urql'
import { devtoolsExchange } from '@urql/devtools'
import { authExchange } from '@urql/exchange-auth'
import { getToken } from 'src/store/user/userHooks'
import { pipe, mergeMap, fromPromise, fromValue, map } from 'wonka'

const isServerSide = typeof window === 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide })

const isPromise = (value: any) => value && typeof value.then === 'function'

// https://github.com/FormidableLabs/urql/issues/234#issuecomment-602305153
export const fetchOptionsExchange =
  (fn: any): Exchange =>
  ({ forward }) =>
  (ops$) =>
    pipe(
      ops$,
      mergeMap((operation: Operation) => {
        const result = fn(operation.context.fetchOptions)
        return pipe(
          isPromise(result) ? fromPromise(result) : fromValue(result),
          map((fetchOptions: RequestInit | (() => RequestInit)) => ({
            ...operation,
            context: { ...operation.context, fetchOptions },
          }))
        )
      }),
      forward
    )

const client = createClient({
  url: 'https://zillow-karthick.herokuapp.com/v1/graphql',
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
