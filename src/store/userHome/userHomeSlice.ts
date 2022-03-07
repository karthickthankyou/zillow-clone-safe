/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetWishlistedHomesQuery } from 'src/generated/graphql'
import { UseQueryResponse } from 'urql'

export type UserHomeSliceType = {
  wishlisted: UseQueryResponse<GetWishlistedHomesQuery, object>[0]
}

const initialState: UserHomeSliceType = {
  wishlisted: {
    stale: false,
    fetching: false,
  },
}

const userHomeSlice = createSlice({
  name: 'userHome',
  initialState,
  reducers: {
    setWishlistedHomes: (
      state,
      action: PayloadAction<UserHomeSliceType['wishlisted']>
    ) => {
      // @ts-ignore
      state.wishlisted = action.payload
    },
  },
})

export const { setWishlistedHomes } = userHomeSlice.actions

export default userHomeSlice.reducer
