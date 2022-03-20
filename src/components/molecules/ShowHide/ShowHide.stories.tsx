import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Wrapper } from 'src/components/atoms/utils'
import ShowHide from './ShowHide'
import NotesFixed from '../NotesFixed'

export default {
  title: 'molecules/ShowHide',
  component: ShowHide,
} as ComponentMeta<typeof ShowHide>

const Template: ComponentStory<typeof ShowHide> = (args) => (
  <>
    <Wrapper>
      <ShowHide {...args} />
    </Wrapper>
    <NotesFixed>
      <div>
        This is a very simple component that helps to show/hide content. <br />
        It is an equivalent of
        <code className='inline-block px-2 py-0.5 shadow-inner bg-gray-50 ml-1'>
          show && Content
        </code>
        <br />
        Toggle the show property in the controls panel.
      </div>
    </NotesFixed>
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Content showing...',
  show: true,
}
Primary.parameters = {}
export const Hidden = Template.bind({})
Hidden.args = {
  children: 'Wow. You have discovered the hidden content!!!',
  show: false,
}
Hidden.parameters = {}
