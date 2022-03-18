/* eslint-disable no-param-reassign */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import { AppLevelHooksWithoutAuth } from 'pages/_app'
import produce from 'immer'
import { composedEnhancers } from 'src/store'
import Navbar from './Navbar'
import NotesFixed from 'src/components/molecules/NotesFixed'

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

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
Primary.decorators = [
  (story) => (
    <Provider store={store}>
      <AppLevelHooksWithoutAuth />
      {story()}
      <NotesFixed>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        voluptate at nisi?
      </NotesFixed>
    </Provider>
  ),
]
