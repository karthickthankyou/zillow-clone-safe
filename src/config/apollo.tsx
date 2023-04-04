import axios from 'axios'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { ReactNode } from 'react'

import { useAppSelector } from 'src/store'

export interface IApolloProviderProps {
  children: ReactNode
}

export const ApolloProvider = ({ children }: IApolloProviderProps) => {
  const user = useAppSelector((state) => state.user)

  //   Create an http link
  const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
  })

  const authLink = setContext(async (_, { headers }) => {
    if (!user.token) {
      return {
        headers,
      }
    }

    return {
      headers: {
        ...headers,
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    }
  })

  // Create an Apollo Client instance
  const apolloClient = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })

  return <Provider client={apolloClient}>{children}</Provider>
}

export async function createAuthenticatedClient() {
  const firebaseUser = await axios.post(
    `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.firebaseAPIKey}`,
    {
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      returnSecureToken: true,
    }
  )

  const token = firebaseUser.data.idToken
  const authLink = setContext(async (_, { headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }))

  const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
}
