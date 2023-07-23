/* eslint-disable no-param-reassign */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import { AppLevelHooksWithoutAuth } from 'pages/_app'
import { produce } from 'immer'
import { composedEnhancers } from 'src/store'
import Navbar from './Navbar'

export default {
  title: 'organisms/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = () => <Navbar />

const store = createStore(
  combineReducers({
    user: userReducer,
  }),
  {
    user: produce(userInitialState, (draft) => {
      // ! - Non-null assertion operator
      draft.data.user = {
        uid: '123456',
        displayName: 'Rajini Kant',
        email: 'kar@gmail.com',
      }
    }),
  },
  composedEnhancers
)
const publicUserStore = createStore(
  combineReducers({
    user: userReducer,
  }),
  {
    user: userInitialState,
  },
  composedEnhancers
)

export const PublicUser = Template.bind({})
PublicUser.decorators = [
  (story) => (
    <Provider store={publicUserStore}>
      <AppLevelHooksWithoutAuth />
      {story()}
    </Provider>
  ),
]

export const LoggedInUser = Template.bind({})
LoggedInUser.args = {}
LoggedInUser.parameters = {}
LoggedInUser.decorators = [
  (story) => (
    <Provider store={store}>
      <AppLevelHooksWithoutAuth />
      {story()}
    </Provider>
  ),
]
