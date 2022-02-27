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
  zoom?: number
}

export type CitySlice = {
  citySearchText: string
  cityList: {
    data: { latitude: number; longitude: number; displayName: string }[]
    fetching: boolean
    error?: any
  }
  selectedCity?: string
  mapLocation?: MapLocation
  mapBounds?: [[number, number], [number, number]]
  highlightedHome?: number | null | undefined
  highlightedHomeId?: number | null | undefined
  homesFilter?: Partial<typeof filterDefaultValues>
  popularCities: UseQueryState<GetCitiesQuery>
}

const initialState: CitySlice = {
  citySearchText: '',
  cityList: {
    data: [],
    fetching: false,
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
    setHighlightedHome: (state, action: PayloadAction<number>) => {
      state.highlightedHome = action.payload
    },
    setHighlightedHomeId: (
      state,
      action: PayloadAction<CitySlice['highlightedHomeId']>
    ) => {
      state.highlightedHomeId = action.payload
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
      state.selectedCity = action.payload
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
      action: PayloadAction<CitySlice['mapLocation']>
    ) => {
      console.log('Action payload: ', action.payload)
      state.mapLocation = action.payload
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
  setHighlightedHome,
  setHighlightedHomeId,
} = citySlice.actions

export const selectCitySearchText = (state: RootState) =>
  state.city.citySearchText
export const selectHighlightedHome = (state: RootState) =>
  state.city.highlightedHome
export const selectHighlightedHomeId = (state: RootState) =>
  state.city.highlightedHomeId

export const selectCityList = (state: RootState): CitySlice['cityList'] =>
  state.city.cityList

export const selectSelectedCity = (
  state: RootState
): CitySlice['selectedCity'] => state.city.selectedCity

export const selectMapLocation = (state: RootState): CitySlice['mapLocation'] =>
  state.city.mapLocation

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

export default citySlice.reducer
