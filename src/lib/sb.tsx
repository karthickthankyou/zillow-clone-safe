import { Provider } from 'react-redux'
import { store } from 'src/store'

export const SbReduxProvider = (story: any) => (
  <Provider store={store}>{story()}</Provider>
)
