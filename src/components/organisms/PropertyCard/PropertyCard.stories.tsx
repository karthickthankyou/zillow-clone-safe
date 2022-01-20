import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PropertyCard from './PropertyCard'

export default {
  title: 'organisms/PropertyCard',
  component: PropertyCard,
} as ComponentMeta<typeof PropertyCard>

const Template: ComponentStory<typeof PropertyCard> = () => <PropertyCard />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
