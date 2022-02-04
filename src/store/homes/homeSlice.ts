import { createSlice } from '@reduxjs/toolkit'
import { Homes } from 'src/generated/graphql'

const initialState: Homes[] = {
  data: [],
}

const homeSlice = createSlice({
  name: 'homes',
  initialState,
  reducers: {},
})

export const {} = homeSlice.actions

export default homeSlice.reducer
