import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbUrqlProvider } from 'src/lib/sb'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import homesReducer, {
  initialState as homeInitialData,
} from 'src/store/home/homeSlice'

import mapsReducer, {
  initialState as mapInitialState,
} from 'src/store/map/mapSlice'

import userHomeReducer, {
  initialState as userHomeInitialState,
} from 'src/store/userHome/userHomeSlice'
import { AppLevelHooks } from 'pages/_app'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import ProductListingPage from './ProductListingPage'

export default {
  title: 'templates/ProductListingPage',
  component: ProductListingPage,
  decorators: [SbUrqlProvider],
} as ComponentMeta<typeof ProductListingPage>

const Template: ComponentStory<typeof ProductListingPage> = () => (
  <div className='container mx-auto'>
    <ProductListingPage />
  </div>
)

const store = createStore(
  combineReducers({
    home: homesReducer,
    userHome: userHomeReducer,
    map: mapsReducer,
    user: userReducer,
  }),
  {
    home: homeInitialData,
    userHome: userHomeInitialState,
    map: mapInitialState,
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
