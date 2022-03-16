import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ImageUpload from './ImageUpload'

export default {
  title: 'src/components/molecules/ImageUpload',
  component: ImageUpload,
} as ComponentMeta<typeof ImageUpload>

const Template: ComponentStory<typeof ImageUpload> = (args) => <ImageUpload {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
