import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CityCard from './CityCard'

export default {
  title: 'organisms/CityCard',
  component: CityCard,
} as ComponentMeta<typeof CityCard>

const Template: ComponentStory<typeof CityCard> = (args) => (
  <CityCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
