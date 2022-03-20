import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider, SbUrqlProvider } from 'src/lib/sb'
import Container from 'src/components/atoms/Container'
import NotesFixed from 'src/components/molecules/NotesFixed'
import AddNewHomeTemplate from './AddNewHomeTemplate'

export default {
  title: 'templates/AddNewHomeTemplate',
  component: AddNewHomeTemplate,
  decorators: [SbUrqlProvider, SbReduxProvider],
} as ComponentMeta<typeof AddNewHomeTemplate>

const Template: ComponentStory<typeof AddNewHomeTemplate> = () => (
  <>
    <Container>
      <AddNewHomeTemplate />
    </Container>
    <NotesFixed>This component is wrapped within a container.</NotesFixed>
  </>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
