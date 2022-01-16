import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Select from './Select'

export default {
  title: 'molecules/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = ({ options }) => (
  <Select options={options} />
)

export const Primary = Template.bind({})
Primary.args = {
  options: [
    'Wade Cooper',
    'Arlene Mccoy',
    'Devon Webb',
    'Tom Cook',
    'Tanya Fox',
    'Hellen Schmidt',
    'India',
  ],
}
Primary.parameters = {}
