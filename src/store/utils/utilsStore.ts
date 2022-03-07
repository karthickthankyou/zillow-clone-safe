/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NotificationType } from 'src/types'
import { RootState } from '..'

export type UtilSliceType = {
  notifications: NotificationType[]
}

const initialState: UtilSliceType = {
  notifications: [],
}

const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    addNotification: (
      state,
      action: PayloadAction<UtilSliceType['notifications'][number]>
    ) => {
      state.notifications = [...state.notifications, action.payload]
    },
    removeNotification: (
      state,
      action: PayloadAction<UtilSliceType['notifications'][number]['id']>
    ) => {
      state.notifications = state.notifications.filter(
        (item) => item.id !== action.payload
      )
    },
    resetNotification: (state) => {
      state.notifications = []
    },
  },
})

export const { addNotification, removeNotification, resetNotification } =
  utilsSlice.actions

export const selectNotifications = (state: RootState) =>
  state.utils.notifications

export default utilsSlice.reducer
