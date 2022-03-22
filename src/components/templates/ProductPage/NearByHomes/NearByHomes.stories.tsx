import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider } from 'src/lib/sb'
import NearByHomes from './NearByHomes'

export default {
  title: 'templates/ProductPage/NearByHomes',
  component: NearByHomes,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof NearByHomes>

const Template: ComponentStory<typeof NearByHomes> = (args) => (
  <NearByHomes {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
