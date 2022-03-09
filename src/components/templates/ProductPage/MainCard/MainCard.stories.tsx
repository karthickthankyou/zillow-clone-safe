import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MainCard from './MainCard'

export default {
  title: 'src/components/templates/ProductPage/MainCard',
  component: MainCard,
} as ComponentMeta<typeof MainCard>

const Template: ComponentStory<typeof MainCard> = (args) => <MainCard {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
