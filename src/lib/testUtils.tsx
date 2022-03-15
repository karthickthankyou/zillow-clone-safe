import { mount } from '@cypress/react'
import { ReactElement } from 'react'
import { Provider } from 'urql'
import { Provider as ReduxProvider } from 'react-redux'
import { client } from 'src/config/urqlClientWonka'
import { store as actualStore } from '../store'

export const mountWithProviders = (
  children: ReactElement,
  store: any = actualStore
) =>
  mount(
    <Provider value={client}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </Provider>
  )
