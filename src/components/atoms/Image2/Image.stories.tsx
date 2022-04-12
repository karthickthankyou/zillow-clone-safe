import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Image from './Image'

export default {
  title: 'atoms/Image',
  component: Image,
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => (
  <Image alt='' {...args} />
)

export const Fixed = Template.bind({})
Fixed.args = {
  src: 'https://via.placeholder.com/200',
  className: 'border border-black',
  height: 100,
  width: 250,
  alt: '',
  layout: 'fixed',
}

export const Intrinsic = Template.bind({})
Intrinsic.args = {
  src: 'https://via.placeholder.com/200',
  className: 'border border-black',
  height: 100,
  width: 250,
  alt: '',
  layout: 'intrinsic',
}

export const Fill = Template.bind({})
Fill.args = {
  src: 'https://via.placeholder.com/200',
  className: 'border border-black',
  height: 100,
  width: 250,
  alt: '',
  layout: 'fill',
}

export const Responsive = Template.bind({})
Responsive.args = {
  src: 'https://via.placeholder.com/200',
  className: 'border border-black',
  height: 100,
  width: 250,
  alt: '',
  layout: 'responsive',
}
