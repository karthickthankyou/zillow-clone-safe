import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider } from 'src/lib/sb'
import { PanelContainer, PanelChild } from './MapboxContent'

export default {
  title: 'organisms/MapboxContent',
  component: PanelContainer,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof PanelContainer>

const Template: ComponentStory<typeof PanelContainer> = () => (
  <PanelContainer>
    <PanelChild position='center-bottom'>
      <div>Hello</div>
    </PanelChild>
  </PanelContainer>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
