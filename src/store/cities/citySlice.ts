/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { filterDefaultValues } from 'src/components/organisms/SearchHomesFilter/SearchHomesFilter'
import {
  GetCitiesQuery,
  Homes_Bool_Exp,
  InputMaybe,
} from 'src/generated/graphql'
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
    data: { latitude: number; longitude: number; displayName: string }[]
    fetching: boolean
    error?: any
  }
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
  homesFilter?: Partial<typeof filterDefaultValues>
  popularCities: UseQueryState<GetCitiesQuery>
}

const initialState: CitySlice = {
  citySearchText: '',
  cityList: {
    data: [],
    fetching: false,
  },
  selectedCity: {
    displayName: '',
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
  homesFilter: {},
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
    setHomesFilter: (state, action) => {
      state.homesFilter = action.payload
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
  setSelectedCity,
  setPopularCities,
  setMapLocation,
  setCityList,
  setMapBounds,
  setHomesFilter,
} = citySlice.actions

export const selectCitySearchText = (state: RootState) =>
  state.city.citySearchText

export const selectMap = (state: RootState) => {
  const { latitude, longitude } = state.city.selectedCity
  return { latitude, longitude }
}

export const selectCityList = (state: RootState): CitySlice['cityList'] =>
  state.city.cityList

export const selectSelectedCity = (
  state: RootState
): CitySlice['selectedCity'] => state.city.selectedCity

export const selectMapPosition = (state: RootState): CitySlice['mapPosition'] =>
  state.city.mapPosition

export const selectMapBounds = (state: RootState): CitySlice['mapBounds'] =>
  state.city.mapBounds

export const selectFilters = createSelector(
  [
    (state: RootState) => state.city.mapBounds,
    (state: RootState) => state.city.homesFilter,
  ],
  (mapBounds, filter) => {
    const [ne, sw] = mapBounds as [number, number][]
    const { beds, bath, sqft, price, yearBuilt, homeType } = filter!
    const bedsInt = Number.isNaN(+beds!) ? 0 : +beds!
    const bathInt = Number.isNaN(+bath!) ? 0 : +bath!

    const whereConditions: InputMaybe<Homes_Bool_Exp> = {
      lat: {
        _gt: ne[1],
        _lt: sw[1],
      },
      lng: {
        _gt: ne[0],
        _lt: sw[0],
      },
    }
    if (beds) whereConditions.beds = { _gte: bedsInt }
    if (bath) whereConditions.bath = { _gte: bathInt }
    if (sqft) whereConditions.sqft = { _gte: sqft[0], _lte: sqft[1] }
    if (price) whereConditions.price = { _gte: price[0], _lte: price[1] }
    if (yearBuilt)
      whereConditions.yearBuilt = { _gte: yearBuilt[0], _lte: yearBuilt[1] }
    if (homeType) whereConditions.style = { _in: homeType }

    return whereConditions
  }
)

export const selectPopularCities = (
  state: RootState
): CitySlice['popularCities'] => state.city.popularCities

export const selectMapWhere = (state: RootState) => {
  const [ne, sw] = state.city.mapBounds!
  return {
    lat: { _gt: ne[1], _lt: sw[1] },
    lng: { _gt: ne[0], _lt: sw[0] },
  }
}

export default citySlice.reducer
