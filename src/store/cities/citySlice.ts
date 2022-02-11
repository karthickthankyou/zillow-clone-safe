/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetCitiesQuery, SearchCitiesQuery } from 'src/generated/graphql'
import { UseQueryState } from 'urql'
import { RootState } from '..'

export type MapLocation = {
  longitude: number
  latitude: number
  zoom: number
  height: number
  width: number
  ne: [number, number]
  sw: [number, number]
}

export type CitySlice = {
  citySearchText: string
  cityList: {
    data: { lat: number; lng: number; displayName: string }[]
    fetching: boolean
    error?: any
  }
  cityOptions: UseQueryState<SearchCitiesQuery>
  selectedCity: {
    displayName: string
    lat?: number
    lng?: number
    zoom?: number
    bounds?: [[number, number], [number, number]]
  }
  popularCities: UseQueryState<GetCitiesQuery>
}

const initialState: CitySlice = {
  citySearchText: '',
  cityList: {
    data: [],
    fetching: false,
  },
  cityOptions: {
    data: {
      search_cities: [],
    },
    fetching: false,
    stale: false,
  },
  selectedCity: {
    displayName: '',
    zoom: 12,
    bounds: [
      [0, 0],
      [0, 0],
    ],
  },
  popularCities: {
    data: { cities: [] },
    fetching: false,
    stale: false,
  },
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCitySearchText: (
      state,
      action: PayloadAction<CitySlice['citySearchText']>
    ) => {
      state.citySearchText = action.payload
    },
    setCityList: (state, action: PayloadAction<CitySlice['cityList']>) => {
      // @ts-ignore
      state.cityList = action.payload
    },
    setCityOptions: (
      state,
      action: PayloadAction<CitySlice['cityOptions']>
    ) => {
      // @ts-ignore
      state.cityOptions = action.payload
    },
    setSelectedCity: (
      state,
      action: PayloadAction<CitySlice['selectedCity']>
    ) => {
      const { displayName, lat, lng } = action.payload
      state.selectedCity.displayName = displayName
      state.selectedCity.lat = lat
      state.selectedCity.lng = lng
    },
    setPopularCities: (
      state,
      action: PayloadAction<CitySlice['popularCities']>
    ) => {
      // @ts-ignore
      state.popularCities = action.payload
    },
    setMapLocation: (
      state,
      action: PayloadAction<Omit<CitySlice['selectedCity'], 'displayName'>>
    ) => {
      const { lat, lng, zoom, bounds } = action.payload
      if (lat) state.selectedCity.lat = lat
      if (lng) state.selectedCity.lng = lng
      if (zoom) state.selectedCity.zoom = zoom
      if (bounds) state.selectedCity.bounds = bounds
    },
  },
})

export const {
  setCitySearchText,
  setCityOptions,
  setSelectedCity,
  setPopularCities,
  setMapLocation,
  setCityList,
} = citySlice.actions

export const selectCitySearchText = (state: RootState) =>
  state.city.citySearchText

export const selectMap = (state: RootState) => {
  const { lat, lng, zoom } = state.city.selectedCity
  return { latitude: lat, longitude: lng, zoom }
}

export const selectCityList = (state: RootState): CitySlice['cityList'] =>
  state.city.cityList

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

export const selectSelectedCity = (
  state: RootState
): CitySlice['selectedCity'] => state.city.selectedCity
export const selectPopularCities = (
  state: RootState
): CitySlice['popularCities'] => state.city.popularCities

export default citySlice.reducer
