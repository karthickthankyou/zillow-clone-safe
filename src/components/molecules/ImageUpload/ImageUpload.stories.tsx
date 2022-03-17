import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ImageUpload from './ImageUpload'

export default {
  title: 'molecules/ImageUpload',
  component: ImageUpload,
} as ComponentMeta<typeof ImageUpload>

const Template: ComponentStory<typeof ImageUpload> = () => <ImageUpload />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
