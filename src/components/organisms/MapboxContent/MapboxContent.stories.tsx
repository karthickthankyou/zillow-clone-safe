import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider } from 'src/lib/sb'
import MapboxContent from './MapboxContent'

export default {
  title: 'organisms/MapboxContent',
  component: MapboxContent,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof MapboxContent>

const Template: ComponentStory<typeof MapboxContent> = () => <MapboxContent />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
