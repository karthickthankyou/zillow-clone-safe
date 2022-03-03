import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider } from 'src/lib/sb'
import { PanelContainer, Panel } from './MapboxContent'

export default {
  title: 'organisms/MapboxContent',
  component: PanelContainer,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof PanelContainer>

const Template: ComponentStory<typeof PanelContainer> = () => (
  <PanelContainer>
    <Panel position='center-bottom'>
      <div>Hello</div>
    </Panel>
  </PanelContainer>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
