import {
  cacheExchange,
  Client,
  createClient,
  dedupExchange,
  fetchExchange,
  Provider,
  ssrExchange,
} from 'urql'
import { Children } from 'src/types'

import { devtoolsExchange } from '@urql/devtools'
import { useGetToken } from 'src/store/user/userHooks'
import { useEffect } from 'react'

export interface IUrqlProviderProps {
  children: Children
}

// const wsClient = createWSClient({
//   url: 'ws://zillow-karthick.herokuapp.com/v1/graphql',
// })
// subscriptionExchange({
//   forwardSubscription: (operation) => ({
//     subscribe: (sink) => ({
//       unsubscribe: wsClient.subscribe(operation, sink),
//     }),
//   }),
// }),

// const cache = cacheExchange({
//   optimistic: {
//     favoriteTodo: (variables, cache, info) => ({
//       __typename: 'Todo',
//       id: variables.id,
//       favorite: true,
//     }),
//   },
// })

// authExchange({ getAuth, addAuthToOperation }),

const isServerSide = typeof window === 'undefined'
export const ssrCache = ssrExchange({ isClient: !isServerSide })

const UrqlProvider = ({ children }: IUrqlProviderProps) => {
  const token = useGetToken()

  const client = createClient({
    url: 'https://zillow-karthick.herokuapp.com/v1/graphql',
    exchanges: [
      devtoolsExchange,
      dedupExchange,
      cacheExchange,
      ssrCache,
      fetchExchange,
    ],
    fetchOptions: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  })

  return <Provider value={client}>{children}</Provider>
}

export default UrqlProvider
