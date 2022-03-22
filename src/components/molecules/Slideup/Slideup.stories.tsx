import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Slideup from './Slideup'

export default {
  title: 'molecules/Slideup',
  component: Slideup,
} as ComponentMeta<typeof Slideup>

const Template: ComponentStory<typeof Slideup> = (args) => (
  <>
    <div className='h-screen90' />
    <div className='h-screen bg-red-50'>
      <Slideup {...args} />
    </div>
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Hello World',
}

export const TriggerPoint50Percentage = Template.bind({})
TriggerPoint50Percentage.args = {
  children: 'Hello World',
  triggerPoint: 0.5,
}
