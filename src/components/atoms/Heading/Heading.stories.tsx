import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Heading from './Heading'

export default {
  title: 'atoms/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = ({ variant, children }) => (
  <div>
    <hr className='border-gray-600' />
    <Heading headerType='h3' variant={variant}>
      {children}
    </Heading>
    <hr className='border-gray-600' />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  variant: 'heading-1',
  children: 'Hello World',
}
Primary.parameters = {}
