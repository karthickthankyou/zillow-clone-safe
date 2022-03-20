import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Wrapper } from '../utils'

import Link from './Link'

export default {
  title: 'atoms/Link',
  component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = ({ href, children }) => (
  <Wrapper>
    <Link href={href}>{children}</Link>
  </Wrapper>
)

export const Primary = Template.bind({})
Primary.args = {
  href: '/',
  children: 'This is a link.',
}
Primary.parameters = {}
