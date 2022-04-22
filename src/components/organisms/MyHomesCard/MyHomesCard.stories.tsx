import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sampleMyHome } from 'src/lib/util'
import MyHomesCard from './MyHomesCard'

export default {
  title: 'src/components/organisms/MyHomesCard',
  component: MyHomesCard,
} as ComponentMeta<typeof MyHomesCard>

const Template: ComponentStory<typeof MyHomesCard> = (args) => (
  <MyHomesCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  home: sampleMyHome,
}
Primary.parameters = {}
