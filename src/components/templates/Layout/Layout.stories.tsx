import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Layout from './Layout'

export default {
  title: 'templates/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
