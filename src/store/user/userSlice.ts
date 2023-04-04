import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

export type Role = 'admin' | 'agent'
export type UserSliceType = {
  uid?: string
  displayName?: string
  email?: string
  roles?: Role[]
  token?: string
  loaded: boolean
}

export const userInitialState: UserSliceType = {
  loaded: false,
}
export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserSliceType>>) => ({
      ...state,
      ...action.payload,
      loaded: true,
    }),
    resetUser: () => userInitialState,
  },
})
export const { setUser, resetUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user
export const selectUid = (state: RootState) => state.user.uid
export const selectDisplayName = (state: RootState) => state.user.displayName
export const selectUserRoles = (state: RootState) => state.user.roles

export const userReducer = userSlice.reducer
