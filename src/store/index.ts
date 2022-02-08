import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import {
  debounceTime,
  distinct,
  distinctUntilChanged,
  from,
  map,
  pairwise,
} from 'rxjs'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import userReducer from './user'
import cityReducer from './cities/citySlice'
import homesReducer from './homes/homeSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    city: cityReducer,
    homes: homesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const store$ = from(store)

const city$ = store$.pipe(
  map((state) => state.city),
  debounceTime(500),
  distinctUntilChanged(),
  pairwise()
)
const cityListener = city$.subscribe((v) =>
  console.log('Cities changed listened from inside provider: ', v)
)

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

// Questions about synchronous Redux
// https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux
// https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559

// Urql debouncing
// https://github.com/FormidableLabs/urql/discussions/1547#discussioncomment-623426
