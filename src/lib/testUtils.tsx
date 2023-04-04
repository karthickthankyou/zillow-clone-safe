import { mount } from '@cypress/react'
import { ReactNode } from 'react'
import { Provider } from 'urql'
import { Provider as ReduxProvider } from 'react-redux'
import { client } from 'src/config/urqlClientWonka'
import { store as actualStore } from '../store'

export const mountWithProviders = (
  children: ReactNode,
  store: any = actualStore
) =>
  mount(
    <Provider value={client}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </Provider>
  )
