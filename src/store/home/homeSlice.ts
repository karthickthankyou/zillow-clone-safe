/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SearchHomesByLocationQuery } from 'src/generated/graphql'
import { UseQueryResponse } from 'urql'
import { RootState } from '..'

export type HomeSliceType = {
  mapResults: UseQueryResponse<SearchHomesByLocationQuery, object>[0]
  highlightedHomeId?: SearchHomesByLocationQuery['homes'][0]['id'] | null
  highlightedCityId?: SearchHomesByLocationQuery['cities'][0]['id'] | null
  highlightedStateId?: SearchHomesByLocationQuery['states'][0]['id'] | null
}
const initialState: HomeSliceType = {
  mapResults: {
    fetching: false,
    stale: false,
  },
  highlightedHomeId: null,
  highlightedCityId: null,
  highlightedStateId: null,
}

const homeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    setMapResults: (
      state,
      action: PayloadAction<HomeSliceType['mapResults']>
    ) => {
      // @ts-ignore
      state.mapResults = action.payload
    },
    setHighlightedHomeId: (
      state,
      action: PayloadAction<HomeSliceType['highlightedHomeId']>
    ) => {
      state.highlightedHomeId = action.payload
    },
    setHighlightedCityId: (
      state,
      action: PayloadAction<HomeSliceType['highlightedCityId']>
    ) => {
      state.highlightedCityId = action.payload
    },
    setHighlightedStateId: (
      state,
      action: PayloadAction<HomeSliceType['highlightedStateId']>
    ) => {
      state.highlightedStateId = action.payload
    },
  },
})

export const {
  setMapResults,
  setHighlightedHomeId,
  setHighlightedCityId,
  setHighlightedStateId,
} = homeSlice.actions

/** Selectors */
export const selectMapResults = (state: RootState) => state.home.mapResults
export const selectMapResultsFetching = (state: RootState) =>
  state.home.mapResults.fetching
export const selectMapResultsError = (state: RootState) =>
  state.home.mapResults?.error
export const selectMapResultsHomes = (state: RootState) =>
  state.home.mapResults?.data?.homes || []
export const selectMapResultsCities = (state: RootState) =>
  state.home.mapResults?.data?.cities || []
export const selectMapResultsStates = (state: RootState) =>
  state.home.mapResults?.data?.states || []

export const selectHighlightedHomeId = (state: RootState) =>
  state.home.highlightedHomeId
export const selectHighlightedCityId = (state: RootState) =>
  state.home.highlightedCityId
export const selectHighlightedStateId = (state: RootState) =>
  state.home.highlightedStateId

export default homeSlice.reducer
