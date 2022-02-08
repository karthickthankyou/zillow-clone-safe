import { createSlice } from '@reduxjs/toolkit'
import debounce from 'lodash.debounce'
import isEqual from 'react-fast-compare'
import { MapLocation } from '../cities/citySlice'

const initialState = {}

export interface FilterState {
  search: string
  location: MapLocation
  highlightedId?: number | null
  yearBuilt: [number, number]
  price: [number, number]
  sqft: [number, number]
  beds: string
  bath: string
  homeType: string[]
}

const initialFilterState: FilterState = {
  search: '',
  location: {
    latitude: -40,
    longitude: 10,
    width: 100,
    height: 100,
    zoom: 12,
    ne: [0, 0],
    sw: [0, 0],
  },
  yearBuilt: [1800, 2022],
  price: [0, 10_000_000],
  sqft: [0, 20_000],
  beds: 'Any',
  bath: 'Any',
  homeType: [],
  highlightedId: null,
}

const searchHomesSlice = createSlice({
  name: 'SearchHomes',
  initialState,
  reducers: {},
})

export const {} = searchHomesSlice.actions

export default searchHomesSlice.reducer

/**
 *
 *
 *
 *
 * Rough outline of the redux store
 *
 *
 *
 */

export interface FilterState {
  search: string
  location: MapLocation
  highlightedId?: number | null
  yearBuilt: [number, number]
  price: [number, number]
  sqft: [number, number]
  beds: string
  bath: string
  homeType: string[]
}

export type FilterAction =
  | { type: 'SET_SEARCH'; payload: FilterState['search'] }
  | { type: 'SET_LOCATION'; payload: FilterState['location'] }
  | { type: 'SET_YEARS'; payload: FilterState['yearBuilt'] }
  | { type: 'SET_PRICE'; payload: FilterState['price'] }
  | { type: 'SET_SQFT'; payload: FilterState['sqft'] }
  | { type: 'SET_BEDS'; payload: FilterState['beds'] }
  | { type: 'SET_BATH'; payload: FilterState['bath'] }
  | { type: 'SET_HOMETYPE'; payload: FilterState['homeType'] }
  | { type: 'SET_HIGHLIGHTED_ID'; payload: FilterState['highlightedId'] }
  | { type: 'RESET'; payload: FilterState }

const reducer = (state: FilterState, action: FilterAction): FilterState => {
  switch (action.type) {
    case 'SET_SEARCH': {
      return { ...state, search: action.payload }
    }
    case 'SET_LOCATION': {
      return { ...state, location: action.payload }
    }
    case 'SET_YEARS': {
      return { ...state, yearBuilt: action.payload }
    }
    case 'SET_PRICE': {
      return { ...state, price: action.payload }
    }
    case 'SET_SQFT': {
      return { ...state, sqft: action.payload }
    }
    case 'SET_BEDS': {
      return { ...state, beds: action.payload }
    }
    case 'SET_BATH': {
      return { ...state, bath: action.payload }
    }
    case 'SET_HOMETYPE': {
      return { ...state, homeType: action.payload }
    }
    case 'SET_HIGHLIGHTED_ID': {
      return { ...state, highlightedId: action.payload }
    }
    case 'RESET': {
      return {
        // Use all the initial properties to reset the state.
        ...action.payload,
        // But, we dont have to reset the search and location.
        search: state.search,
        location: state.location,
      }
    }
    default:
      return state
  }
}

const getDirtyFields = (
  initialState: FilterState,
  currentState: FilterState
) => {
  const dirtyItems: Partial<FilterState> = {}
  const defaultDirtyItems = ['search', 'location']
  Object.keys(initialState).forEach((item) => {
    const isDirty = !isEqual(initialState[item], currentState[item])
    const isDefault = defaultDirtyItems.includes(item)
    if (isDirty || isDefault) {
      dirtyItems[item] = currentState[item]
    }
  })
  return dirtyItems
}

const debounced = debounce((filterState, initialFilterState, save) => {
  // getDirtyFields(initialFilterState, filterState)
  const dirty = getDirtyFields(initialFilterState, filterState)
  save(dirty)
}, 600)
