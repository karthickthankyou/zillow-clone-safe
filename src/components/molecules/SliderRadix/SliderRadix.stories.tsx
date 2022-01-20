import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SliderRadix from './SliderRadix'

export default {
  title: 'molecules/SliderRadix',
  component: SliderRadix,
} as ComponentMeta<typeof SliderRadix>

const Template: ComponentStory<typeof SliderRadix> = (args) => (
  <SliderRadix {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  max: 100,
  min: 0,
}
Primary.parameters = {}
