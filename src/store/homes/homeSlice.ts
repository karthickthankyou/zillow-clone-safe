import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UseQueryState } from 'urql'
import { SearchHomesByLocationQuery } from 'src/generated/graphql'
import { RootState } from '..'

type HomeType = {
  homesMap: UseQueryState<SearchHomesByLocationQuery>[0]
}

const initialState: HomeType = {
  homesMap: [],
}

const homeSlice = createSlice({
  name: 'homes',
  initialState,
  reducers: {
    setHomesMap: (state, action: PayloadAction<HomeType['homesMap']>) => {
      // @ts-ignore
      state.homesMap = action.payload
    },
  },
})

export const { setHomesMap } = homeSlice.actions

/** Selectors */
const selectHomesMap = (state: RootState) => state.homes.homesMap

export default homeSlice.reducer
