/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Viewport, MapSearch, Bounds } from 'src/types'
import { RootState } from '..'
import { initialViewport } from '../static'

export interface MapSlice {
  viewport: Viewport
  debouncedViewport: Viewport
  bounds: Bounds
  searchText: string
  mapSearchOptions: {
    data: MapSearch[]
    fetching: boolean
    error?: any
  }
  mapSearchSelected?: MapSearch
}

const initialState: MapSlice = {
  viewport: initialViewport,
  debouncedViewport: initialViewport,
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
    setViewportLocation: (
      state,
      action: PayloadAction<Omit<MapSlice['viewport'], 'zoom'>>
    ) => {
      state.viewport.latitude = action.payload.latitude
      state.viewport.longitude = action.payload.longitude
    },
    setZoom: (state, action: PayloadAction<MapSlice['viewport']['zoom']>) => {
      state.viewport.zoom = action.payload
    },
    setBounds: (state, action: PayloadAction<MapSlice['bounds']>) => {
      state.bounds = action.payload
    },
    setDebouncedViewport: (
      state,
      action: PayloadAction<MapSlice['debouncedViewport']>
    ) => {
      state.debouncedViewport = action.payload
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
  setViewportLocation,
  setDebouncedViewport,
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
export const selectDebouncedViewport = (state: RootState) =>
  state.map.debouncedViewport
export const selectZoom = (state: RootState) => state.map.viewport.zoom
export const selectDebouncedZoom = (state: RootState) =>
  state.map.debouncedViewport.zoom

export const selectBounds = (state: RootState) => state.map.bounds

/**
 * Reducer
 */
export default mapSlice.reducer
