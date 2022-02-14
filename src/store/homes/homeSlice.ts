/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  SearchHomesByLocationQuery,
  SearchHomesByLocationDetailedQuery,
} from 'src/generated/graphql'
import { RootState } from '..'

type HomeType = {
  homesMap: {
    fetching?: boolean
    error?: any
    data?: SearchHomesByLocationQuery['homes']
  }
  homesList: {
    fetching?: boolean
    error?: any
    data?: SearchHomesByLocationDetailedQuery['homes']
  }
}

const initialState: HomeType = {
  homesMap: {
    data: [],
  },
  homesList: {
    data: [],
  },
}

const homeSlice = createSlice({
  name: 'homes',
  initialState,
  reducers: {
    setHomesMap: (state, action: PayloadAction<HomeType['homesMap']>) => {
      const { data, fetching, error } = action.payload
      if (data) state.homesMap.data = data
      if (error) state.homesMap.error = error
      if (!(fetching === undefined)) state.homesMap.fetching = fetching
    },
    setHomesList: (state, action: PayloadAction<HomeType['homesList']>) => {
      const { data, fetching, error } = action.payload
      if (data) state.homesList.data = data
      if (error) state.homesList.error = error
      if (!(fetching === undefined)) state.homesList.fetching = fetching
    },
  },
})

export const { setHomesMap, setHomesList } = homeSlice.actions

/** Selectors */
export const selectHomesMap = (state: RootState) => state.homes.homesMap
export const selectHomesList = (state: RootState) => state.homes.homesList

export default homeSlice.reducer
