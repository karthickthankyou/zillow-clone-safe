import { Provider } from 'react-redux'
import { store } from 'src/store'
import { Provider as UrqlProvider } from 'urql'
import { client } from 'src/config/urqlClient'

export const SbReduxProvider = (story: any) => (
  <UrqlProvider value={client}>
    <Provider store={store}>{story()}</Provider>
  </UrqlProvider>
)
