/* eslint-disable no-param-reassign */
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { castDraft } from 'immer'
import { filterDefaultValues } from 'src/components/organisms/SearchHomesFilter/filterUtils'
import {
  PropertyQuery,
  SearchPropertiesQuery,
  LocationStatsQuery,
  InputMaybe,
  IntFilter,
  SearchPropertiesQueryVariables,
  SearchPropertiesDetailedQuery,
  PropertyWhereInput,
  LocationStatsQueryVariables,
  LocationStatsWhereInput,
  LocationStatsType,
} from 'src/generated/graphql'

import { QueryResultPartial } from 'src/types'
import { RootState } from '..'
import { showCities, showHomes, showStates } from '../static'

export type LocationFilter = {
  lat: IntFilter
  lng: IntFilter
}

export interface HomeSliceType {
  homesFilter?: Partial<typeof filterDefaultValues>
  properties: QueryResultPartial<SearchPropertiesQuery, object>
  homesDetailed: QueryResultPartial<SearchPropertiesDetailedQuery, object>
  cities: QueryResultPartial<LocationStatsQuery, object>
  states: QueryResultPartial<LocationStatsQuery, object>
  hoverStates: {
    highlightedHomeId?: SearchPropertiesQuery['properties'][0]['id'] | null
    highlightedCityId?: LocationStatsQuery['locationStats'][0]['id'] | null
    highlightedStateId?: LocationStatsQuery['locationStats'][0]['id'] | null
    highlightedHome?: PropertyQuery['property'] | null
    highlightedCity?: LocationStatsQuery['locationStats'][0]['id'] | null
    highlightedState?: LocationStatsQuery['locationStats'][0]['id'] | null
  }
}
export const initialState: HomeSliceType = {
  homesFilter: {},
  properties: {},
  homesDetailed: {},
  cities: {},
  states: {},
  hoverStates: {
    highlightedHomeId: null,
    highlightedHome: null,
  },
}

// Find this link to know how we avoided putting ts-ignore
// https://immerjs.github.io/immer/typescript/

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
    setHomes: (state, action: PayloadAction<HomeSliceType['properties']>) => {
      state.properties = castDraft(action.payload)
    },
    setHomesDetailed: (
      state,
      action: PayloadAction<HomeSliceType['homesDetailed']>
    ) => {
      state.homesDetailed = castDraft(action.payload)
    },
    setCities: (state, action: PayloadAction<HomeSliceType['cities']>) => {
      state.cities = castDraft(action.payload)
    },
    setStates: (state, action: PayloadAction<HomeSliceType['states']>) => {
      state.states = castDraft(action.payload)
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
  setHomesDetailed,
  setCities,
  setStates,
  setHighlightedHomeId,
  setHighlightedCityId,
  setHighlightedStateId,
} = homeSlice.actions

/** Selectors */
export const selectHomesMap = (state: RootState) => state.home.properties
export const selectHomesDetailed = (state: RootState) =>
  state.home.homesDetailed
export const selectCitiesMap = (state: RootState) => state.home.cities
export const selectStatesMap = (state: RootState) => state.home.states

export const selectMapFetching = createSelector(
  [selectHomesMap, selectCitiesMap, selectStatesMap],
  (homes, cities, states) => homes.loading || cities.loading || states.loading
)

type HomesDetailedType = NonNullable<
  HomeSliceType['homesDetailed']['data']
>['properties'][number] & { wishlisted?: boolean }

export type HomesWishlisted = HomeSliceType['homesDetailed'] & {
  data?:
    | (Omit<HomeSliceType['homesDetailed']['data'], 'homes'> & {
        homes: Array<HomesDetailedType>
      })
    | undefined
}

export const selectMapError = createSelector(
  [selectHomesMap],
  (homes) => homes.error
)

export const selectHighlightedHomeId = (state: RootState) =>
  state.home.hoverStates.highlightedHomeId

export const selectHighlightedCityId = (state: RootState) =>
  state.home.hoverStates.highlightedCityId
export const selectHighlightedStateId = (state: RootState) =>
  state.home.hoverStates.highlightedStateId

export const selectMapWhere = (state: RootState): LocationFilter => {
  const [ne, sw] = state.map.bounds as [number, number][]
  return {
    lat: {
      gt: ne[1],
      lt: sw[1],
    },
    lng: {
      gt: ne[0],
      lt: sw[0],
    },
  }
}

export const selectHomeFilters = createSelector(
  [
    selectMapWhere,
    (state: RootState) => state.map.viewport.zoom,
    (state: RootState) => state.home.homesFilter,
  ],
  (whereCondition, zoom, filter): SearchPropertiesQueryVariables => {
    const { beds, bath, sqft, price, yearBuilt, homeType } = filter!
    const bedsInt = Number.isNaN(+beds!) ? 0 : +beds!
    const bathInt = Number.isNaN(+bath!) ? 0 : +bath!

    const homesWhere: InputMaybe<PropertyWhereInput> = { ...whereCondition }

    if (beds) homesWhere.beds = { gte: bedsInt }
    if (bath) homesWhere.bath = { gte: bathInt }
    if (sqft) homesWhere.sqft = { gte: sqft[0], lte: sqft[1] }
    if (price) homesWhere.price = { gte: price[0], lte: price[1] }
    if (yearBuilt)
      homesWhere.yearBuilt = { gte: yearBuilt[0], lte: yearBuilt[1] }
    if (homeType) homesWhere.style = { in: homeType }

    const homesLimit = showHomes(zoom) ? 50 : 0

    return { where: homesWhere, take: homesLimit }
  }
)

export const selectCitiesFilters = createSelector(
  [selectMapWhere, (state: RootState) => state.map.viewport.zoom],
  (whereCondition, zoom): LocationStatsQueryVariables => {
    const where: InputMaybe<LocationStatsWhereInput> = {
      lat: whereCondition.lat,
      lng: whereCondition.lng,
      type: LocationStatsType.City,
      totalHomes: { gt: 5 },
    }

    return {
      where,
      take: showCities(zoom) ? 50 : 0,
    }
  }
)

export const selectStatesFilters = createSelector(
  [selectMapWhere, (state: RootState) => state.map.viewport.zoom],
  (whereCondition, zoom): LocationStatsQueryVariables => {
    const where: InputMaybe<LocationStatsWhereInput> = {
      lat: whereCondition.lat,
      lng: whereCondition.lng,
      type: LocationStatsType.State,
    }

    return {
      where,
      take: showStates(zoom) ? 50 : 0,
    }
  }
)

export const homeReducer = homeSlice.reducer
