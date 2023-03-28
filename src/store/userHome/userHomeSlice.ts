/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { castDraft } from 'immer'
import { UserHomesQuery } from 'src/generated/graphql'
import { UseQueryResponse } from 'urql'

import { RootState } from '..'

export type UserHomeSliceType = {
  wishlisted: UseQueryResponse<UserHomesQuery, object>[0]
}

export const initialState: UserHomeSliceType = {
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
      state.wishlisted = castDraft(action.payload)
    },
  },
})

export const { setWishlistedHomes } = userHomeSlice.actions

export const selectWishlistedHomes = (state: RootState) =>
  state.userHome.wishlisted

export default userHomeSlice.reducer
