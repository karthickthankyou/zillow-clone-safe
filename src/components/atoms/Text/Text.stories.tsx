import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Text from './Text'
import { Wrapper } from '../utils'

export default {
  title: 'atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = ({
  size,
  mb,
  muted,
  weight,
  children,
}) => (
  <Wrapper>
    <hr className='border-gray-600' />
    <Text size={size} mb={mb} muted={muted} weight={weight}>
      {children}
    </Text>
    <hr className='border-gray-600' />
  </Wrapper>
)

export const Primary = Template.bind({})
Primary.args = {
  size: 'text-lg',
  muted: 'inherit',
  mb: 'mb-0',
  weight: 'font-normal',
  children: 'Hello World you there?',
}
Primary.parameters = {}
