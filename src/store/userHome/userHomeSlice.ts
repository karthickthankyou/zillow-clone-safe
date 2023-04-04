/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { castDraft } from 'immer'
import { MyHomesQuery } from 'src/generated/graphql'

import { QueryResultPartial } from 'src/types'
import { RootState } from '..'

export type UserHomeSliceType = {
  wishlisted: QueryResultPartial<MyHomesQuery, object>
}

export const initialState: UserHomeSliceType = {
  wishlisted: {},
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
