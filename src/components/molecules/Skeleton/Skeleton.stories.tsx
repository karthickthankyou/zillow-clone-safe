import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Skeleton from './Skeleton'

export default {
  title: 'molecules/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
)

const ParagraphTemplate: ComponentStory<typeof Skeleton> = () => (
  <>
    <Skeleton className='w-full h-4' />
    <Skeleton className='w-3/4 h-4 mt-1' />
    <Skeleton className='w-1/2 h-4 mt-1' />
  </>
)
const UserCardTemplate: ComponentStory<typeof Skeleton> = () => (
  <div className='flex space-x-3'>
    <Skeleton className='flex-shrink-0 w-12 h-12' round />
    <div className='w-full'>
      <Skeleton className='w-full h-4' />
      <Skeleton className='w-3/4 h-4 mt-1' />
      <Skeleton className='w-1/2 h-4 mt-1' />
    </div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  className: 'h-4 w-full',
}
export const Round = Template.bind({})
Round.args = {
  className: 'h-8 w-8',
  round: true,
}

export const Paragraph = ParagraphTemplate.bind({})
export const UserCard = UserCardTemplate.bind({})
