import { createSlice } from '@reduxjs/toolkit'

export type homeFilterType = {
  mapBounds?: [[number, number], [number, number]]
  citySearchText?: string
  price?: [number, number]
}

const initialState: homeFilterType = {}

const homeFilter = createSlice({
  name: 'homeFilter',
  initialState,
  reducers: {},
})

export const {} = homeFilter.actions

export default homeFilter.reducer
