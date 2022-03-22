import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { combineReducers, createStore } from '@reduxjs/toolkit'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import produce from 'immer'
import { Provider } from 'react-redux'
import MyAccount from './MyAccount'

export default {
  title: 'templates/MyAccount',
  component: MyAccount,
} as ComponentMeta<typeof MyAccount>

const Template: ComponentStory<typeof MyAccount> = () => <MyAccount />

// state.user.data.claims?.['x-hasura-allowed-roles']
const adminStore = createStore(combineReducers({ user: userReducer }), {
  user: produce(userInitialState, (draft) => {
    draft.data.claims = {
      'x-hasura-allowed-roles': ['admin', 'agent', 'user'],
      'x-hasura-default-role': 'admin',
      'x-hasura-user-id': '123456',
    }
  }),
})
const userStore = createStore(combineReducers({ user: userReducer }), {
  user: produce(userInitialState, (draft) => {
    draft.data.claims = {
      'x-hasura-allowed-roles': ['user'],
      'x-hasura-default-role': 'user',
      'x-hasura-user-id': '123456',
    }
  }),
})
const publicStore = createStore(combineReducers({ user: userReducer }), {
  user: userInitialState,
})

export const Admin = Template.bind({})
Admin.decorators = [
  (story) => <Provider store={adminStore}>{story()}</Provider>,
]
export const User = Template.bind({})
User.decorators = [(story) => <Provider store={userStore}>{story()}</Provider>]

export const Public = Template.bind({})
Public.decorators = [
  (story) => <Provider store={publicStore}>{story()}</Provider>,
]
