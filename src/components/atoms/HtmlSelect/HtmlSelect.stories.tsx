import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HtmlSelect from './HtmlSelect'
import { Wrapper } from '../utils'

export default {
  title: 'atoms/HtmlSelect',
  component: HtmlSelect,
} as ComponentMeta<typeof HtmlSelect>

const Template: ComponentStory<typeof HtmlSelect> = (args) => (
  <Wrapper>
    <HtmlSelect {...args} />
  </Wrapper>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
