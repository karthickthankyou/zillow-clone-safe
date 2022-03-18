import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import usersReducer, { initialState } from 'src/store/user/userSlice'
import { RootState } from 'src/store'
import { Provider } from 'react-redux'
import PropertyCard from './PropertyCard'

export default {
  title: 'organisms/PropertyCard',
  component: PropertyCard,
} as ComponentMeta<typeof PropertyCard>

const Template: ComponentStory<typeof PropertyCard> = (args) => (
  <PropertyCard {...args} />
)

const store = createStore(combineReducers({ user: usersReducer }), {
  user: {
    data: {
      user: {
        uid: '23984',
        displayName: '',
        email: '',
      },
      claims: null,
    },
    fulfilled: true,
    loading: false,
    error: false,
  },
})

export const Primary = Template.bind({})
Primary.args = {
  id: 3,
  address: '',
  beds: 3,
  bath: 3,
  price: 987300,
  sqft: 1233,
  wishlisted: undefined,
}
Primary.parameters = {}

Primary.decorators = [(story) => <Provider store={store}>{story()}</Provider>]
