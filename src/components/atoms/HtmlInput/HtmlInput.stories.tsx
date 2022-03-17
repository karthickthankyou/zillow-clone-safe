import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HtmlInput from './HtmlInput'
import { Wrapper } from '../utils'

export default {
  title: 'atoms/HtmlInput',
  component: HtmlInput,
} as ComponentMeta<typeof HtmlInput>

const Template: ComponentStory<typeof HtmlInput> = (args) => (
  <Wrapper>
    <HtmlInput {...args} />
  </Wrapper>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
