import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider, SbUrqlProvider } from 'src/lib/sb'
import Hero from './Hero'

export default {
  title: 'templates/Hero',
  component: Hero,
  decorators: [SbUrqlProvider, SbReduxProvider],
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = () => (
  <Hero executeScroll={() => {}} />
)

export const Primary = Template.bind({})
