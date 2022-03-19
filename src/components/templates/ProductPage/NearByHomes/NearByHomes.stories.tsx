import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NearByHomes from './NearByHomes'

export default {
  title: 'templates/ProductPage/NearByHomes',
  component: NearByHomes,
} as ComponentMeta<typeof NearByHomes>

const Template: ComponentStory<typeof NearByHomes> = (args) => (
  <NearByHomes {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
// Primary.decorators = {}
