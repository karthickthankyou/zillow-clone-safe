import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Style } from 'src/generated/graphql'
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
    fetching: false,
    stale: false,
    data: {
      property: {
        id: 12,
        priceSqft: 12,
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01',
        address: '6046 M J Taylor Road, Hahira, Georgia 31632, United States',
        bath: 1,
        beds: 1,
        city: 'Hahira',
        description: 'Goood house.',
        facts: '',
        features: 'yes.',
        lat: 31.03866,
        lng: -83.45001,
        lotSize: 1200,
        price: 878,
        sqft: 1000,
        state: 'Georgia',
        style: Style.SingleFamilyHome,
        yearBuilt: 1999,
        zipcode: '31632',
        imgs: [],
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
