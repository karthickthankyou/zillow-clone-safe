import { Provider } from 'react-redux'
import { store } from 'src/store'
import { createClient, Provider as UrqlProvider } from 'urql'

const client = createClient({
  url: 'https://zillow-karthick.herokuapp.com/v1/graphql',
  requestPolicy: 'network-only',
})

export const SbReduxProvider = (story: any) => (
  <UrqlProvider value={client}>
    <Provider store={store}>{story()}</Provider>
  </UrqlProvider>
)
