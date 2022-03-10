import { createClient, Provider, defaultExchanges, cacheExchange } from 'urql'
import { makeOperation } from '@urql/core'
import { authExchange } from '@urql/exchange-auth'
import { devtoolsExchange } from '@urql/devtools'
import { Children } from 'src/types'
import { getToken } from 'src/store/user/userHooks'

export interface IUrqlProviderProps {
  children: Children
}

const getAuth = async ({ authState, mutate }: any) => {
  if (!authState) {
    const token = await getToken()

    if (token) {
      return { token }
    }
    return null
  }

  return null
}

const addAuthToOperation = ({ authState, operation }: any) => {
  if (!authState || !authState.token) {
    return operation
  }

  const fetchOptions =
    typeof operation.context.fetchOptions === 'function'
      ? operation.context.fetchOptions()
      : operation.context.fetchOptions || {}

  return makeOperation(operation.kind, operation, {
    ...operation.context,
    fetchOptions: {
      ...fetchOptions,
      headers: {
        ...fetchOptions.headers,
        Authorization: `Bearer ${authState.token}`,
      },
    },
  })
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

const UrqlProvider = ({ children }: IUrqlProviderProps) => {
  // const cache = cacheExchange({
  //   optimistic: {
  //     favoriteTodo: (variables, cache, info) => ({
  //       __typename: 'Todo',
  //       id: variables.id,
  //       favorite: true,
  //     }),
  //   },
  // })

  const client = createClient({
    url: 'https://zillow-karthick.herokuapp.com/v1/graphql',
    exchanges: [
      devtoolsExchange,
      authExchange({ getAuth, addAuthToOperation }),
      ...defaultExchanges,
    ],
  })
  return <Provider value={client}>{children}</Provider>
}

export default UrqlProvider
