import {
  ssrExchange,
  fetchExchange,
  dedupExchange,
  createClient,
  cacheExchange,
  makeOperation,
} from 'urql'
import { devtoolsExchange } from '@urql/devtools'
import { authExchange } from '@urql/exchange-auth'
import { getToken } from 'src/store/user/userHooks'

const getAuth2 = async ({ authState, mutate }: any) => {
  console.log('---Entering authExchange---')
  if (!authState) {
    const token = await getToken()

    if (token) {
      console.log('---Entering authExchange--- Token found.', token)
      return { token }
    }
    return null
  }

  return null
}

const addAuthToOperation2 = ({ authState, operation }: any) => {
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
      credentials: 'include',
    },
  })
}

const isServerSide = typeof window === 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide })

const client = createClient({
  url: 'https://zillow-karthick.herokuapp.com/v1/graphql',
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    cacheExchange,
    ssrCache,
    authExchange({
      getAuth: getAuth2,
      addAuthToOperation: addAuthToOperation2,
    }),
    fetchExchange,
  ],
})

export { client, ssrCache }
