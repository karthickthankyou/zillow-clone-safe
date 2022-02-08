/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WebMercatorViewport } from 'react-map-gl'
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
  cityOptions: UseQueryState<SearchCitiesQuery>
  selectedCity: {
    displayName: string
    lat?: number
    lng?: number
    width?: number
    height?: number
    zoom?: number
    ne?: [number, number]
    sw?: [number, number]
  }
  popularCities: UseQueryState<GetCitiesQuery>
}

const initialState: CitySlice = {
  citySearchText: '',
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
      const { lat, lng, zoom, width, height, ne, sw } = action.payload
      if (lat) state.selectedCity.lat = lat
      if (lng) state.selectedCity.lng = lng
      if (zoom) state.selectedCity.zoom = zoom
      if (width) state.selectedCity.width = width
      if (height) state.selectedCity.height = height
      if (ne) state.selectedCity.ne = ne
      if (sw) state.selectedCity.sw = sw
    },
  },
})

export const {
  setCitySearchText,
  setCityOptions,
  setSelectedCity,
  setPopularCities,
  setMapLocation,
} = citySlice.actions

export const selectCitySearchText = (state: RootState) =>
  state.city.citySearchText

export const selectMap = (state: RootState) => {
  const { lat, lng, width, height, zoom } = state.city.selectedCity
  return { latitude: lat, longitude: lng, width, height, zoom }
}

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
export const selectPopularCities = (state: RootState) =>
  state.city.popularCities

export default citySlice.reducer
