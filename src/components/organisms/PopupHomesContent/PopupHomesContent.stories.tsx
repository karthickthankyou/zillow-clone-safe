import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import produce from 'immer'
import { composedEnhancers } from 'src/store'
import { Provider } from 'react-redux'
import { AppLevelHooksWithoutAuth } from 'pages/_app'
import { SbUrqlProvider } from 'src/lib/sb'
import PopupHomesContent from './PopupHomesContent'

export default {
  title: 'organisms/PopupHomesContent',
  component: PopupHomesContent,
  decorators: [SbUrqlProvider],
} as ComponentMeta<typeof PopupHomesContent>

const Template: ComponentStory<typeof PopupHomesContent> = (args) => (
  <PopupHomesContent {...args} />
)

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
Primary.args = {
  id: 123456,
}
Primary.parameters = {}
Primary.decorators = [
  (story) => (
    <Provider store={store}>
      <AppLevelHooksWithoutAuth />
      {story()}
    </Provider>
  ),
]
