import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ChevronRightIcon from '@heroicons/react/outline/ChevronRightIcon'
import ChevronLeftIcon from '@heroicons/react/outline/ChevronLeftIcon'
import Container from './Container'

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
      <ChevronRightIcon className='w-6 h-6 animate-slide' />
      <div className='px-6'>Container</div>
      <ChevronLeftIcon className='w-6 h-6 animate-slide-left' />
    </div>
  ),
}
Primary.parameters = {}
