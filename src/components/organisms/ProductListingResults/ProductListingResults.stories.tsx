import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider, SbUrqlProvider } from 'src/lib/sb'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import homeReducer, {
  initialState as homeInitialState,
} from 'src/store/home/homeSlice'
import produce from 'immer'
import { mockDataSearchCitiesByLocation } from 'src/mocks/data/cities'
import ProductListingResults from './ProductListingResults'

export default {
  title: 'organisms/ProductListingResult',
  component: ProductListingResults,
  decorators: [SbUrqlProvider, SbReduxProvider],
} as ComponentMeta<typeof ProductListingResults>

const store = createStore(combineReducers({ home: homeReducer }), {
  home: homeInitialState,
})

const Template: ComponentStory<typeof ProductListingResults> = () => (
  <ProductListingResults />
)

export const Primary = Template.bind({})
Primary.args = {}
