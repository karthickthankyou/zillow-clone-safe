import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Heading from './Heading'

export default {
  title: 'atoms/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = ({ variant, children }) => (
  <>
    <hr className='border-gray-600' />
    <Heading headerType='h3' variant={variant}>
      {children}
    </Heading>
    <hr className='border-gray-600' />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  variant: 'heading-1',
  children: 'Hello World',
}
Primary.parameters = {}
