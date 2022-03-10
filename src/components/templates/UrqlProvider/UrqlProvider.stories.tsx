import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UrqlProvider from './UrqlProvider'

export default {
  title: 'src/components/templates/UrqlProvider',
  component: UrqlProvider,
} as ComponentMeta<typeof UrqlProvider>

const Template: ComponentStory<typeof UrqlProvider> = (args) => <UrqlProvider {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
