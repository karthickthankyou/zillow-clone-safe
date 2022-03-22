import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import { AppLevelHooks } from 'pages/_app'
import Signin from './Signin'

export default {
  title: 'templates/Signin',
  component: Signin,
} as ComponentMeta<typeof Signin>

const Template: ComponentStory<typeof Signin> = () => <Signin />

const store = createStore(
  combineReducers({
    user: userReducer,
  }),
  {
    user: userInitialState,
  }
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
Primary.decorators = [
  (story) => (
    <Provider store={store}>
      <AppLevelHooks />
      {story()}
    </Provider>
  ),
]
