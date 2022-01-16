import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import img from 'src/assets/image.jpg'
import Avatar from './Avatar'

export default {
  title: 'atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = ({
  size,
  src,
  rounded,
  count,
  shadow,
}) => (
  <Avatar
    size={size}
    src={src}
    rounded={rounded}
    count={count}
    shadow={shadow}
  />
)

export const Primary = Template.bind({})
Primary.args = {
  size: 'sm',
  src: img.toString(),
}
Primary.parameters = {}
