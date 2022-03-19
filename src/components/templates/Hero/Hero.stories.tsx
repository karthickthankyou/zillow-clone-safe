import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbUrqlProvider } from 'src/lib/sb'
import Hero from './Hero'

export default {
  title: 'templates/Hero',
  component: Hero,
  decorators: [SbUrqlProvider],
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = () => (
  <div>
    <Hero executeScroll={() => {}} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
