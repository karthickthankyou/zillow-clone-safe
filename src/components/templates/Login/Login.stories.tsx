import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { combineReducers, createStore } from '@reduxjs/toolkit'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import { Provider } from 'react-redux'
import { AppLevelHooks } from 'pages/_app'
import Login from './Login'

export default {
  title: 'templates/Login',
  component: Login,
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = () => <Login />

export const Primary = Template.bind({})

const store = createStore(
  combineReducers({
    user: userReducer,
  }),
  {
    user: userInitialState,
  }
)

Primary.decorators = [
  (story) => (
    <Provider store={store}>
      <AppLevelHooks />
      {story()}
    </Provider>
  ),
]
