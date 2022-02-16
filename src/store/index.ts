import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import {
  debounceTime,
  distinct,
  distinctUntilChanged,
  from,
  map,
  mergeMap,
  pairwise,
  throttleTime,
  filter,
  tap,
  catchError,
  EMPTY,
  merge,
  of,
} from 'rxjs'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import userReducer from './user'
import cityReducer from './cities/citySlice'
import { createObservables } from './streams'

export const store = configureStore({
  reducer: {
    user: userReducer,
    city: cityReducer,
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

export const store$ = from(store)
const { city$ } = createObservables(store$)

city$.subscribe()

// Questions about synchronous Redux
// https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux
// https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559

// Urql debouncing
// https://github.com/FormidableLabs/urql/discussions/1547#discussioncomment-623426
