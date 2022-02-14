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
    latitude?: number
    longitude?: number
  }
  mapPosition?: {
    latitude?: number
    longitude?: number
  }
  mapBounds?: [[number, number], [number, number]]
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
  },
  mapBounds: [
    [0, 0],
    [0, 0],
  ],
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
      const { displayName, latitude, longitude } = action.payload
      state.selectedCity.displayName = displayName
      state.selectedCity.latitude = latitude
      state.selectedCity.longitude = longitude
    },
    setPopularCities: (
      state,
      action: PayloadAction<CitySlice['popularCities']>
    ) => {
      // @ts-ignore
      state.popularCities = action.payload
    },
    setMapBounds: (state, action) => {
      state.mapBounds = action.payload
    },
    setMapLocation: (
      state,
      action: PayloadAction<Omit<CitySlice['selectedCity'], 'displayName'>>
    ) => {
      const { latitude, longitude } = action.payload
      if (latitude) state.selectedCity.latitude = latitude
      if (longitude) state.selectedCity.longitude = longitude
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
  setMapBounds,
} = citySlice.actions

export const selectCitySearchText = (state: RootState) =>
  state.city.citySearchText

export const selectMap = (state: RootState) => {
  const { latitude, longitude, zoom } = state.city.selectedCity
  return { latitude, longitude, zoom }
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

export const selectMapPosition = (state: RootState): CitySlice['mapPosition'] =>
  state.city.mapPosition

export const selectMapBounds = (state: RootState): CitySlice['mapBounds'] =>
  state.city.mapBounds

export const selectPopularCities = (
  state: RootState
): CitySlice['popularCities'] => state.city.popularCities

export default citySlice.reducer
