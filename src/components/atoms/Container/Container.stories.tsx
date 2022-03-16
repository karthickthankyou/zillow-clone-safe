import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Container from './Container'
import ChevronRightIcon from '@heroicons/react/outline/ChevronRightIcon'
import ChevronLeftIcon from '@heroicons/react/outline/ChevronLeftIcon'

export default {
  title: 'atoms/Container',
  component: Container,
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  className: ' w-full bg-primary-200',
  children: (
    <div className='flex justify-center'>
      <ChevronLeftIcon className='w-6 h-6' />
      Container
      <ChevronRightIcon className='w-6 h-6 animate-pulse' />
    </div>
  ),
}
Primary.parameters = {}
