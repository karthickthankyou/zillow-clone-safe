import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
  children: 'Loading...',
}

export const Small = Template.bind({})
Small.args = {
  children: 'Small',
  size: 'sm',
}
export const Medium = Template.bind({})
Medium.args = {
  children: 'Medium',
  size: 'md',
}
export const Large = Template.bind({})
Large.args = {
  children: 'Large',
  size: 'lg',
}

export const NoProps = Template.bind({})
NoProps.args = {
  children: 'Default Button',
}

export const PrimaryContained = Template.bind({})
PrimaryContained.args = {
  variant: 'contained',
  color: 'primary',
  fullWidth: false,
  disabled: false,
  children: 'Primary contained',
}

export const SuccessContained = Template.bind({})
SuccessContained.args = {
  variant: 'contained',
  color: 'success',
  fullWidth: false,
  disabled: false,
  children: 'Success contained',
}

export const ErrorContained = Template.bind({})
ErrorContained.args = {
  variant: 'contained',
  color: 'error',
  fullWidth: false,
  disabled: false,
  children: 'Error contained',
}

// Outlined

export const PrimaryOutlined = Template.bind({})
PrimaryOutlined.args = {
  variant: 'outlined',
  color: 'primary',
  fullWidth: false,
  disabled: false,
  children: 'Primary outlined',
}

export const SuccessOutlined = Template.bind({})
SuccessOutlined.args = {
  variant: 'outlined',
  color: 'success',
  fullWidth: false,
  disabled: false,
  children: 'Success outlined',
}

export const ErrorOutlined = Template.bind({})
ErrorOutlined.args = {
  variant: 'outlined',
  color: 'error',
  fullWidth: false,
  disabled: false,
  children: 'Error outlined',
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  children: 'full width',
  fullWidth: true,
}
export const Disabled = Template.bind({})
Disabled.args = {
  children: 'disabled',
  disabled: true,
}
export const CustomClasses = Template.bind({})
CustomClasses.args = {
  children: 'custom classes',
  className: 'ml-12 rotate-12 skew-x-12',
}
export const CrazyChildren = Template.bind({})
CrazyChildren.args = {
  children: (
    <div>
      Hello{' '}
      <span className='text-lg'>
        children <span className='p-1 bg-white rounded-full shadow-lg'>🎉</span>{' '}
      </span>
    </div>
  ),
}
