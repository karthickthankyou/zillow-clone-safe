import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MessageCard from './MessageCard'

export default {
  title: 'organisms/MessageCard',
  component: MessageCard,
  decorators: [(story) => <div className='h-screen bg-white'>{story()}</div>],
} as ComponentMeta<typeof MessageCard>

const Template: ComponentStory<typeof MessageCard> = (args) => (
  <MessageCard {...args} />
)
const SampleListTemplate: ComponentStory<typeof MessageCard> = (args) => (
  <div className='flex flex-col gap-2'>
    <MessageCard {...args} />
    <MessageCard {...args} />
    <MessageCard {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  message: {
    id: 713,
    message: 'Hey, are you getting my messages?',
    createdAt: '2022-04-12T16:39:10.389271+00:00',
    property: {
      id: 1,
      imgs: [],
      price: 120,
      address: '2733 49th Ave SW Seattle, WA 98116',
    },
  },
}
export const List = SampleListTemplate.bind({})
List.args = {
  message: {
    id: 714,
    message: 'Hey, are you getting my messages?',
    createdAt: '2022-04-12T16:39:10.389271+00:00',
    property: {
      id: 1,
      imgs: [],
      price: 120,
      address: '2733 49th Ave SW Seattle, WA 98116',
    },
  },
}
