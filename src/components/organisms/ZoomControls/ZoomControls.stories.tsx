import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider } from 'src/lib/sb'
import AcademicCapIcon from '@heroicons/react/outline/AcademicCapIcon'
import AnnotationIcon from '@heroicons/react/outline/AnnotationIcon'
import BellIcon from '@heroicons/react/outline/BellIcon'
import BriefcaseIcon from '@heroicons/react/outline/BriefcaseIcon'
import ChartPieIcon from '@heroicons/react/outline/ChartPieIcon'
import { Panel, PanelContainer } from '../MapboxContent/MapboxContent'
import ZoomControls, { MapControlAction } from './ZoomControls'

export default {
  title: 'organisms/ZoomControls',
  component: ZoomControls,
  decorators: [
    SbReduxProvider,
    (story) => (
      <PanelContainer>
        <Panel>{story()}</Panel>
      </PanelContainer>
    ),
  ],
} as ComponentMeta<typeof ZoomControls>

const Template: ComponentStory<typeof ZoomControls> = () => (
  <ZoomControls>
    <ZoomControls.ZoomIn />
    <ZoomControls.ZoomOut />
  </ZoomControls>
)
const OptionsTemplate: ComponentStory<typeof ZoomControls> = () => (
  <ZoomControls>
    <ZoomControls.ExpandIn />
    <ZoomControls.GotoMarker viewport={{ latitude: 33, longitude: 112 }} />
    <ZoomControls.ResetMap />
  </ZoomControls>
)
const HaveAnythingTemplate: ComponentStory<typeof ZoomControls> = () => (
  <ZoomControls>
    <MapControlAction
      Icon={AcademicCapIcon}
      action={() => console.log('AcademicCapIcon clicked')}
    />
    <MapControlAction
      Icon={AnnotationIcon}
      action={() => console.log('AnnotationIcon clicked')}
    />
    <MapControlAction
      Icon={BellIcon}
      action={() => console.log('BellIcon clicked')}
    />
    <MapControlAction
      Icon={BriefcaseIcon}
      action={() => console.log('BriefcaseIcon clicked')}
    />
    <MapControlAction
      Icon={ChartPieIcon}
      action={() => console.log('ChartPieIcon clicked')}
    />
  </ZoomControls>
)

export const Primary = Template.bind({})
export const OtherOptions = OptionsTemplate.bind({})
export const HaveAnything = HaveAnythingTemplate.bind({})
