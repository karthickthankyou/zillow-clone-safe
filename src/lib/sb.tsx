import { Provider } from 'react-redux'
import { store } from 'src/store'
import { Provider as UrqlProvider } from 'urql'
import { client } from 'src/config/urqlClientWonka'

export const SbUrqlProvider = (story: any) => (
  <UrqlProvider value={client}>{story()}</UrqlProvider>
)
export const SbReduxProvider = (story: any) => (
  <Provider store={store}>{story()}</Provider>
)
