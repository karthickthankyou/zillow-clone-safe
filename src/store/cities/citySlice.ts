/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SearchCitiesQuery } from 'src/generated/graphql'
import { UseQueryResponse } from 'urql'
import { RootState } from '..'

type CitySlice = {
  citySearchText: string
  cityOptions: UseQueryResponse<SearchCitiesQuery>[0]
  selectedCity?: SearchCitiesQuery['search_cities']
}

const initialState: CitySlice = {
  citySearchText: '',
  cityOptions: {
    data: {
      search_cities: [],
    },
    fetching: false,
    error: undefined,
    stale: false,
  },
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCitySearchText: (state, action) => {
      state.citySearchText = action.payload
    },
    setCityOptions: (state, action) => {
      state.cityOptions = action.payload
    },
    setSelectedCity: (state, action) => {
      state.cityOptions = action.payload
    },
  },
})

export const { setCitySearchText, setCityOptions, setSelectedCity } =
  citySlice.actions

export const selectCitySearchText = (state: RootState) =>
  state.city.citySearchText

export const selectCityOptions = (state: RootState) => {
  const { data, fetching, error } = state.city.cityOptions
  return {
    data:
      data?.search_cities.map(({ lat, lng, displayName }) => ({
        lat,
        lng,
        displayName,
      })) || [],
    fetching,
    error,
  }
}

export const selectSelectedCity = (state: RootState) => state.city.selectedCity

export default citySlice.reducer
