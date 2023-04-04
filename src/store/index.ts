import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { Observable } from 'rxjs'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducer } from './user'
import mapReducer from './map/mapSlice'
import { homeReducer } from './home/homeSlice'
import utilReducer from './utils/utilsStore'
import userHomeReducer from './userHome/userHomeSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    map: mapReducer,
    home: homeReducer,
    utils: utilReducer,
    userHome: userHomeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

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
export const composedEnhancers = composeWithDevTools()

export const store$ = new Observable<RootState>((subscriber) => {
  // Subscribe to the Redux store
  const unsubscribe = store.subscribe(() => {
    subscriber.next(store.getState())
  })

  // Unsubscribe when the Observable is unsubscribed
  return () => {
    unsubscribe()
  }
})
export type StoreObservableType = typeof store$

// Questions about synchronous Redux
// https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux
// https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559

// Urql debouncing
// https://github.com/FormidableLabs/urql/discussions/1547#discussioncomment-623426
