import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Animations from './Animations'

export default {
  title: '_foundations/Animations',
  component: Animations,
} as ComponentMeta<typeof Animations>

const Template: ComponentStory<typeof Animations> = ({
  children = 'Hello World',
  className,
}) => (
  <div className='flex items-center justify-center w-screen h-screen'>
    <div className='flex items-center justify-center h-64 max-w-md p-6 font-serif text-white border border-white rounded shadow-xl w-128 shadow-black/20 bg-primary-900'>
      <Animations className={className}>{children}</Animations>
    </div>
  </div>
)

export const Pulse = Template.bind({})
Pulse.args = {
  className: 'animate-pulse ',
}

export const Spin = Template.bind({})
Spin.args = {
  className: 'animate-spin  ',
}
export const SpinSlow = Template.bind({})
SpinSlow.args = {
  className: 'animate-spin-slow  ',
}
export const SpinReverse = Template.bind({})
SpinReverse.args = {
  className: 'animate-spin-reverse  ',
}
export const Bounce = Template.bind({})
Bounce.args = {
  className: 'animate-bounce  ',
}
export const Wiggle = Template.bind({})
Wiggle.args = {
  className: 'animate-wiggle  ',
}
export const Ping = Template.bind({})
Ping.args = {
  className: 'animate-ping  ',
}
export const Slide = Template.bind({})
Slide.args = {
  className: 'animate-slide  ',
  children: 'Hello World >',
}
export const SlideLeft = Template.bind({})
SlideLeft.args = {
  className: 'animate-slide-left  ',
  children: '< Hello World',
}
export const Breathe = Template.bind({})
Breathe.args = {
  className: 'animate-breathe  ',
  children: 'Hello World',
}
