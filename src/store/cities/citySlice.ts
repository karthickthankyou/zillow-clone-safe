/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { filterDefaultValues } from 'src/components/organisms/SearchHomesFilter/filterUtils'
import {
  Homes_Bool_Exp,
  InputMaybe,
  SearchHomesByLocationQueryVariables,
  Location_Stats_Bool_Exp,
} from 'src/generated/graphql'
import { UseQueryArgs } from 'urql'
import { RootState } from '..'

export type CitySlice = {
  highlightedHomeId?: number | null | undefined
  homesFilter?: Partial<typeof filterDefaultValues>
}

const initialState: CitySlice = {
  homesFilter: {},
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setHomesFilter: (state, action) => {
      state.homesFilter = action.payload
    },
  },
})

export const { setHomesFilter } = citySlice.actions

export const selectHighlightedHomeId = (state: RootState) =>
  state.city.highlightedHomeId

export const selectFilters = createSelector(
  [
    (state: RootState) => state.map.bounds,
    (state: RootState) => state.map.show,
    (state: RootState) => state.map.viewport.zoom,
    (state: RootState) => state.city.homesFilter,
  ],
  (
    mapBounds,
    fetchFlags,
    zoom,
    filter
  ): Omit<
    UseQueryArgs<SearchHomesByLocationQueryVariables>,
    'query'
  >['variables'] => {
    const [ne, sw] = mapBounds as [number, number][]
    const { beds, bath, sqft, price, yearBuilt, homeType } = filter!
    const bedsInt = Number.isNaN(+beds!) ? 0 : +beds!
    const bathInt = Number.isNaN(+bath!) ? 0 : +bath!

    // const area = Math.abs(ne[1] - sw[1]) * Math.abs(ne[0] - sw[0])
    const homesWhere: InputMaybe<Homes_Bool_Exp> = {
      lat: {
        _gt: ne[1],
        _lt: sw[1],
      },
      lng: {
        _gt: ne[0],
        _lt: sw[0],
      },
    }

    if (beds) homesWhere.beds = { _gte: bedsInt }
    if (bath) homesWhere.bath = { _gte: bathInt }
    if (sqft) homesWhere.sqft = { _gte: sqft[0], _lte: sqft[1] }
    if (price) homesWhere.price = { _gte: price[0], _lte: price[1] }
    if (yearBuilt)
      homesWhere.yearBuilt = { _gte: yearBuilt[0], _lte: yearBuilt[1] }
    if (homeType) homesWhere.style = { _in: homeType }

    const citiesWhere: InputMaybe<Location_Stats_Bool_Exp> = {
      lat: homesWhere.lat,
      lng: homesWhere.lng,
      type: { _eq: 'city' },
    }
    const statesWhere = {
      lat: homesWhere.lat,
      lng: homesWhere.lng,
      type: { _eq: 'state' },
    }

    const fetchHomes = fetchFlags.homes && zoom >= 11
    const fetchCities = fetchFlags.cities && zoom > 5 && zoom <= 11
    const fetchStates = fetchFlags.states && zoom <= 5 && zoom > 2

    return {
      homesWhere,
      citiesWhere: {
        ...citiesWhere,
        totalHomes: {
          /** We need to group too small cities together in the database. */
          _gt: 10,
        },
      },
      statesWhere,
      homesLimit: fetchHomes ? 50 : 0,
      citiesLimit: fetchCities ? 50 : 0,
      statesLimit: fetchStates ? 50 : 0,
    }
  }
)

export default citySlice.reducer
