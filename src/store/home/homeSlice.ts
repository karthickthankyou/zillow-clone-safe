/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { filterDefaultValues } from 'src/components/organisms/SearchHomesFilter/filterUtils'
import {
  GetHomeByIdQuery,
  SearchHomesByLocationQuery,
  SearchCitiesByLocationQuery,
  SearchStatesByLocationQuery,
  SearchStatesByLocationQueryVariables,
  InputMaybe,
  SearchHomesByLocationQueryVariables,
  SearchCitiesByLocationQueryVariables,
  Location_Stats_Bool_Exp,
  Homes_Bool_Exp,
} from 'src/generated/graphql'
import { UseQueryArgs, UseQueryResponse } from 'urql'
import { RootState } from '..'

export type HomeSliceType = {
  homesFilter?: Partial<typeof filterDefaultValues>
  homes: UseQueryResponse<SearchHomesByLocationQuery, object>[0]
  cities: UseQueryResponse<SearchCitiesByLocationQuery, object>[0]
  states: UseQueryResponse<SearchStatesByLocationQuery, object>[0]
  hoverStates: {
    highlightedHomeId?: SearchHomesByLocationQuery['homes'][0]['id'] | null
    highlightedCityId?: SearchCitiesByLocationQuery['cities'][0]['id'] | null
    highlightedStateId?: SearchStatesByLocationQuery['states'][0]['id'] | null
    highlightedHome?: GetHomeByIdQuery['homes_by_pk'] | null
    highlightedCity?: SearchCitiesByLocationQuery['cities'][0]['id'] | null
    highlightedState?: SearchStatesByLocationQuery['states'][0]['id'] | null
  }
}
const initialState: HomeSliceType = {
  homesFilter: {},
  homes: {
    fetching: false,
    stale: false,
  },
  cities: {
    fetching: false,
    stale: false,
  },
  states: {
    fetching: false,
    stale: false,
  },
  hoverStates: {
    highlightedHomeId: null,
    highlightedCityId: null,
    highlightedStateId: null,
    highlightedHome: null,
    highlightedCity: null,
    highlightedState: null,
  },
}

const homeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    setHomesFilter: (
      state,
      action: PayloadAction<HomeSliceType['homesFilter']>
    ) => {
      state.homesFilter = action.payload
    },
    setHomes: (state, action: PayloadAction<HomeSliceType['homes']>) => {
      // @ts-ignore
      state.homes = action.payload
    },
    setCities: (state, action: PayloadAction<HomeSliceType['cities']>) => {
      // @ts-ignore
      state.cities = action.payload
    },
    setStates: (state, action: PayloadAction<HomeSliceType['states']>) => {
      // @ts-ignore
      state.states = action.payload
    },
    setHighlightedHomeId: (
      state,
      action: PayloadAction<HomeSliceType['hoverStates']['highlightedHomeId']>
    ) => {
      state.hoverStates.highlightedHomeId = action.payload
    },
    setHighlightedCityId: (
      state,
      action: PayloadAction<HomeSliceType['hoverStates']['highlightedCityId']>
    ) => {
      state.hoverStates.highlightedCityId = action.payload
    },
    setHighlightedStateId: (
      state,
      action: PayloadAction<HomeSliceType['hoverStates']['highlightedStateId']>
    ) => {
      state.hoverStates.highlightedStateId = action.payload
    },
  },
})

export const {
  setHomesFilter,
  setHomes,
  setCities,
  setStates,
  setHighlightedHomeId,
  setHighlightedCityId,
  setHighlightedStateId,
} = homeSlice.actions

/** Selectors */
export const selectHomesMap = (state: RootState) => state.home.homes
export const selectCitiesMap = (state: RootState) => state.home.cities
export const selectStatesMap = (state: RootState) => state.home.states

export const selectMapFetching = createSelector(
  [selectHomesMap, selectCitiesMap, selectStatesMap],
  (homes, cities, states) =>
    homes.fetching || cities.fetching || states.fetching
)
export const selectMapError = createSelector(
  [selectHomesMap, selectCitiesMap, selectStatesMap],
  (homes, cities, states) => homes.error || cities.error || states.error
)

export const selectHighlightedHomeId = (state: RootState) =>
  state.home.hoverStates.highlightedHomeId
export const selectHighlightedCityId = (state: RootState) =>
  state.home.hoverStates.highlightedCityId
export const selectHighlightedStateId = (state: RootState) =>
  state.home.hoverStates.highlightedStateId

export const selectMapWhere = (state: RootState): Homes_Bool_Exp => {
  const [ne, sw] = state.map.bounds as [number, number][]
  return {
    lat: {
      _gt: ne[1],
      _lt: sw[1],
    },
    lng: {
      _gt: ne[0],
      _lt: sw[0],
    },
  }
}

export const selectHomeFilters = createSelector(
  [
    selectMapWhere,
    (state: RootState) => state.map.viewport.zoom,
    (state: RootState) => state.home.homesFilter,
  ],
  (
    whereCondition,
    zoom,
    filter
  ): Omit<
    UseQueryArgs<SearchHomesByLocationQueryVariables>,
    'query'
  >['variables'] => {
    const { beds, bath, sqft, price, yearBuilt, homeType } = filter!
    const bedsInt = Number.isNaN(+beds!) ? 0 : +beds!
    const bathInt = Number.isNaN(+bath!) ? 0 : +bath!

    const homesWhere: InputMaybe<Homes_Bool_Exp> = { ...whereCondition }

    if (beds) homesWhere.beds = { _gte: bedsInt }
    if (bath) homesWhere.bath = { _gte: bathInt }
    if (sqft) homesWhere.sqft = { _gte: sqft[0], _lte: sqft[1] }
    if (price) homesWhere.price = { _gte: price[0], _lte: price[1] }
    if (yearBuilt)
      homesWhere.yearBuilt = { _gte: yearBuilt[0], _lte: yearBuilt[1] }
    if (homeType) homesWhere.style = { _in: homeType }

    return { where: homesWhere, limit: zoom > 11 ? 50 : 0 }
  }
)

export const selectCitiesFilters = createSelector(
  [selectMapWhere, (state: RootState) => state.map.viewport.zoom],
  (
    whereCondition,
    zoom
  ): Omit<
    UseQueryArgs<SearchCitiesByLocationQueryVariables>,
    'query'
  >['variables'] => {
    const where: InputMaybe<Location_Stats_Bool_Exp> = {
      lat: whereCondition.lat,
      lng: whereCondition.lng,
      type: { _eq: 'city' },
    }

    return {
      where,
      limit: zoom < 10 && zoom > 5 ? 50 : 0,
    }
  }
)

export const selectStatesFilters = createSelector(
  [selectMapWhere, (state: RootState) => state.map.viewport.zoom],
  (
    whereCondition,
    zoom
  ): Omit<
    UseQueryArgs<SearchStatesByLocationQueryVariables>,
    'query'
  >['variables'] => {
    const where: InputMaybe<Location_Stats_Bool_Exp> = {
      lat: whereCondition.lat,
      lng: whereCondition.lng,
      type: { _eq: 'state' },
    }

    return {
      where,
      limit: zoom < 5 ? 50 : 0,
    }
  }
)

export default homeSlice.reducer