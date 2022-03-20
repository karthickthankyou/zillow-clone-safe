import React from 'react'
import NotesFixed from 'src/components/molecules/NotesFixed'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Heading from './Heading'
import { Wrapper } from '../utils'

export default {
  title: 'atoms/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = ({ variant, children }) => (
  <>
    <Wrapper>
      <hr className='border-gray-600' />
      <Heading headerType='h3' variant={variant}>
        {children}
      </Heading>
      <hr className='border-gray-600' />
    </Wrapper>
    <NotesFixed>
      The lines are there to show the line height and the bottom margin.
    </NotesFixed>
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  variant: 'heading-1',
  children: 'Hello World',
}
Primary.parameters = {}
