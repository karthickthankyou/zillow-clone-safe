import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider } from 'src/lib/sb'
import Mapbox from './Mapbox'

export default {
  title: 'organisms/Mapbox',
  component: Mapbox,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof Mapbox>

const Template: ComponentStory<typeof Mapbox> = () => <Mapbox />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
