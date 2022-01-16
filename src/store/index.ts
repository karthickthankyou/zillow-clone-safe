import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import counterReducer from './counter'
import userReducer from './user'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
})

// export const getStore2 = (preloadedState: Partial<RootState>) => {
//   const store = configureStore({
//     reducer: {
//       counter: counterReducer,
//       user: userReducer,
//     },
//     preloadedState,
//   })
//   return store
// }

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
