/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import produce, { castDraft } from 'immer'
import { filterDefaultValues } from 'src/components/organisms/SearchHomesFilter/filterUtils'
import {
  PropertyQuery,
  SearchPropertiesQuery,
  Style,
  //   SearchCitiesByLocationQuery,
  //   SearchStatesByLocationQuery,
  //   SearchStatesByLocationQueryVariables,
  InputMaybe,
  IntFilter,
  SearchPropertiesQueryVariables,
  //   SearchCitiesByLocationQueryVariables,
  //   Location_Stats_Bool_Exp,
  //   Homes_Bool_Exp,
  SearchPropertiesDetailedQuery,
  PropertyWhereInput,
} from 'src/generated/graphql'
import { UseQueryArgs, UseQueryResponse } from 'urql'
import { RootState } from '..'
import { showCities, showHomes, showStates } from '../static'

export type LocationFilter = {
  lat: IntFilter
  lng: IntFilter
}

export interface HomeSliceType {
  homesFilter?: Partial<typeof filterDefaultValues>
  properties: UseQueryResponse<SearchPropertiesQuery, object>[0]
  homesDetailed: UseQueryResponse<SearchPropertiesDetailedQuery, object>[0]
  //   cities: UseQueryResponse<SearchCitiesByLocationQuery, object>[0]
  //   states: UseQueryResponse<SearchStatesByLocationQuery, object>[0]
  hoverStates: {
    highlightedHomeId?: SearchPropertiesQuery['properties'][0]['id'] | null
    // highlightedCityId?: SearchCitiesByLocationQuery['cities'][0]['id'] | null
    // highlightedStateId?: SearchStatesByLocationQuery['states'][0]['id'] | null
    highlightedHome?: PropertyQuery['property'] | null
    // highlightedCity?: SearchCitiesByLocationQuery['cities'][0]['id'] | null
    // highlightedState?: SearchStatesByLocationQuery['states'][0]['id'] | null
  }
}
export const initialState: HomeSliceType = {
  homesFilter: {},
  properties: {
    fetching: false,
    stale: false,
  },
  homesDetailed: {
    fetching: false,
    stale: false,
  },
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

    setHighlightedHomeId: (
      state,
      action: PayloadAction<HomeSliceType['hoverStates']['highlightedHomeId']>
    ) => {
      state.hoverStates.highlightedHomeId = action.payload
    },
  },
})

export const {
  setHomesFilter,
  setHomes,
  setHomesDetailed,
  setHighlightedHomeId,
} = homeSlice.actions

/** Selectors */
export const selectHomesMap = (state: RootState) => state.home.properties
export const selectHomesDetailed = (state: RootState) =>
  state.home.homesDetailed

export const selectMapFetching = createSelector(
  [selectHomesMap],
  (homes) => homes.fetching
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
  (
    whereCondition,
    zoom,
    filter
  ): Omit<
    UseQueryArgs<SearchPropertiesQueryVariables>,
    'query'
  >['variables'] => {
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
    // if (homeType) homesWhere.style = homeType

    const homesLimit = showHomes(zoom) ? 50 : 0

    return { where: homesWhere, take: homesLimit }
  }
)

export const homeReducer = homeSlice.reducer
