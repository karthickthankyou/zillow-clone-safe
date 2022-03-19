import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NotesFixed from 'src/components/molecules/NotesFixed'
import SplitLayoutImage from './SplitLayoutImage'

export default {
  title: 'templates/SplitLayoutImage',
  component: SplitLayoutImage,
} as ComponentMeta<typeof SplitLayoutImage>

const Template: ComponentStory<typeof SplitLayoutImage> = (args) => (
  <div>
    <SplitLayoutImage {...args}>Sample child content.</SplitLayoutImage>
    <NotesFixed>
      <div>
        This layout is used in auth pages. Have a look at templates/SignIn and
        templates/SignUp.
      </div>
      <div>Currently the brand logo is static.</div>
    </NotesFixed>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
