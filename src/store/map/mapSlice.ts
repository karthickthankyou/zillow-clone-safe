/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { Viewport, MapSearch } from '../static'

export interface MapSlice {
  viewport: Viewport
  bounds: [[number, number], [number, number]]
  searchText: string
  mapSearchOptions: {
    data: MapSearch[]
    fetching: boolean
    error?: any
  }
  mapSearchSelected?: MapSearch
}

const initialState: MapSlice = {
  viewport: {
    latitude: 39.0119,
    longitude: -98.4842,
    zoom: 3,
  },
  bounds: [
    [0, 0],
    [0, 0],
  ],
  searchText: '',
  mapSearchOptions: {
    data: [],
    fetching: false,
  },
}

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setViewport: (state, action: PayloadAction<MapSlice['viewport']>) => {
      state.viewport = action.payload
    },
    setZoom: (state, action: PayloadAction<MapSlice['viewport']['zoom']>) => {
      state.viewport.zoom = action.payload
    },
    setBounds: (state, action: PayloadAction<MapSlice['bounds']>) => {
      state.bounds = action.payload
    },
    zoomIn: (state) => {
      state.viewport.zoom += 1
    },
    zoomOut: (state) => {
      state.viewport.zoom -= 1
    },
    setSearchText: (state, action: PayloadAction<MapSlice['searchText']>) => {
      state.searchText = action.payload
    },
    setMapSearchOptions: (
      state,
      action: PayloadAction<MapSlice['mapSearchOptions']>
    ) => {
      state.mapSearchOptions = action.payload
    },
    setMapSearchSelected: (
      state,
      action: PayloadAction<MapSlice['mapSearchSelected']>
    ) => {
      state.mapSearchSelected = action.payload
    },
    resetMap: (state) => {
      state.viewport = initialState.viewport
    },
  },
})

/**
 * Actions
 */
export const {
  setSearchText,
  setMapSearchOptions,
  setViewport,
  setZoom,
  setBounds,
  resetMap,
  zoomIn,
  zoomOut,
  setMapSearchSelected,
} = mapSlice.actions

/**
 * Selectors
 */
export const selectSearchText = (state: RootState) => state.map.searchText

export const selectMapSearchOptions = (state: RootState) =>
  state.map.mapSearchOptions

export const selectMapSearchSelected = (state: RootState) =>
  state.map.mapSearchSelected

export const selectViewport = (state: RootState) => state.map.viewport

export const selectBounds = (state: RootState) => state.map.bounds

/**
 * Reducer
 */
export default mapSlice.reducer
