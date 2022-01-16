import { RootState } from '..'
import userReducer from './counterSlice'

/**
 * Selectors: Feeds data in to the UI.
 */
// export { selectCount } from './counterSelectors'
export const selectCount = (state: RootState) => state.counter

/**
 * Actions: All possible actions we can do in this domain.
 */

// Asynchronous
export { incrementAsync } from './counterActions'
// Synchronous
export { increment, decrement, incrementByAmount } from './counterSlice'

/**
 * Hooks: This hook attaches and detaches auth listener.
 */
export {} from './counterHooks'

/**
 * Reducer: The reducer to plug in to the global store.
 */
export default userReducer
