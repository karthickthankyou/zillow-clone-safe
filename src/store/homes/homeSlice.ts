/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UseQueryState } from 'urql'
import {
  SearchHomesByLocationQuery,
  SearchHomesByLocationDetailedQuery,
} from 'src/generated/graphql'
import { RootState } from '..'

type HomeType = {
  homesMap: UseQueryState<SearchHomesByLocationQuery>[0]
  homesList: UseQueryState<SearchHomesByLocationDetailedQuery>[0]
}

const initialState: HomeType = {
  homesMap: {
    data: [],
    fetching: false,
    stale: false,
  },
  homesList: {
    data: [],
    fetching: false,
    stale: false,
  },
}

const homeSlice = createSlice({
  name: 'homes',
  initialState,
  reducers: {
    setHomesMap: (state, action: PayloadAction<HomeType['homesMap']>) => {
      // @ts-ignore
      state.homesMap = action.payload
    },
    setHomesList: (state, action: PayloadAction<HomeType['homesList']>) => {
      // @ts-ignore
      state.homesMap = action.payload
    },
  },
})

export const { setHomesMap, setHomesList } = homeSlice.actions

/** Selectors */
export const selectHomesMap = (state: RootState) => state.homes.homesMap
export const selectHomesList = (state: RootState) => state.homes.homesList

export default homeSlice.reducer
