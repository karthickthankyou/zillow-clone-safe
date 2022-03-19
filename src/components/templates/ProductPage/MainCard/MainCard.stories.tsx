import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MainCard from './MainCard'

export default {
  title: 'templates/ProductPage/MainCard',
  component: MainCard,
} as ComponentMeta<typeof MainCard>

const Template: ComponentStory<typeof MainCard> = (args) => (
  <MainCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  home: {
    data: {
      homes_by_pk: {
        id: 1,
        address: '123 Main St',
        price: 12345,
        beds: 3,
        bath: 2,
        sqft: 1234,
        lotSize: 123,
      },
    },
  },
}
Primary.parameters = {}

export const Fetching = Template.bind({})
Fetching.args = {
  home: {
    fetching: true,
    stale: false,
  },
}
Fetching.parameters = {}
