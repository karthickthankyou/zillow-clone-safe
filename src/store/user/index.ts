import userReducer from './userSlice'

/**
 * Selectors: Feeds data in to the UI.
 */
export { selectUser } from './userSelectors'

/**
 * Actions: All possible actions we can do in this domain.
 */

// Asynchronous
export {
  signin,
  signout,
  signup,
  googleSignin,
  forgotPassword,
} from './userActions'

// Synchronous
export { setUser } from './userSlice'

/**
 * Hooks: This hook attaches and detaches auth listener.
 */
export { useUserListener } from './userHooks'

/**
 * Reducer: The reducer to plug in to the global store.
 */
export default userReducer
