/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'
import { RootState } from '..'
import { AsyncData, User } from '../../types'
import {
  signup,
  signin,
  signout,
  forgotPassword,
  googleSignin,
} from './userActions'

export type Claims = {
  'x-hasura-default-role': string
  'x-hasura-user-id': string
  'x-hasura-allowed-roles': string[]
}

export type UserSliceType = AsyncData<{
  user: User | null
  claims: Claims | null
}>

export const initialState: UserSliceType = {
  data: {
    user: null,
    claims: null,
  },
  fulfilled: true,
  loading: false,
  error: false,
}

// An utility function that reducer redundant code in extra reducers.

const setStatus =
  ({
    fulfilled = false,
    loading = false,
    error = false,
  }: {
    fulfilled?: boolean
    loading?: boolean
    error?: boolean
  }) =>
  (state: WritableDraft<UserSliceType>) => {
    state.fulfilled = fulfilled
    state.loading = loading
    state.error = error
  }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserSliceType['data']['user']>) => {
      state.data.user = action.payload
      state.fulfilled = true
      state.loading = false
      state.error = false
    },
    setClaims: (
      state,
      action: PayloadAction<UserSliceType['data']['claims']>
    ) => {
      state.data.claims = action.payload
      state.fulfilled = true
      state.loading = false
      state.error = false
    },

    resetUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(signup.pending, setStatus({ loading: true }))
    builder.addCase(signup.fulfilled, setStatus({ fulfilled: true }))
    builder.addCase(signup.rejected, setStatus({ error: true }))

    builder.addCase(signin.pending, setStatus({ loading: true }))
    builder.addCase(signin.fulfilled, setStatus({ fulfilled: true }))
    builder.addCase(signin.rejected, setStatus({ error: true }))

    builder.addCase(signout.pending, setStatus({ loading: true }))
    builder.addCase(signout.fulfilled, setStatus({ fulfilled: true }))
    builder.addCase(signout.rejected, setStatus({ error: true }))

    builder.addCase(forgotPassword.pending, setStatus({ loading: true }))
    builder.addCase(forgotPassword.fulfilled, setStatus({ fulfilled: true }))
    builder.addCase(forgotPassword.rejected, setStatus({ error: true }))

    builder.addCase(googleSignin.pending, setStatus({ loading: true }))
    builder.addCase(googleSignin.fulfilled, setStatus({ fulfilled: true }))
    builder.addCase(googleSignin.rejected, setStatus({ error: true }))
  },
})
export const { setUser, setClaims, resetUser } = userSlice.actions

export const selectUid = (state: RootState) => state.user.data.user?.uid
export const selectDisplayName = (state: RootState) =>
  state.user.data.user?.displayName
export const selectUserRoles = (state: RootState) =>
  state.user.data.claims?.['x-hasura-allowed-roles']

export default userSlice.reducer
