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
const SampleListTemplate: ComponentStory<typeof MessageCard> = () => (
  <div className='flex flex-col gap-2'>
    <MessageCard
      id={713}
      address='2733 49th Ave SW Seattle, WA 98116'
      message='Hey, I want to visit your home. Let me know when you are free.'
      date='2022-04-12T16:39:10.389271+00:00'
    />
    <MessageCard
      id={713}
      address='2733 49th Ave SW Seattle, WA 98116'
      message='Hey, are you getting my messages?'
      date='2022-04-12T16:39:10.389271+00:00'
    />
    <MessageCard
      id={713}
      address='2733 49th Ave SW Seattle, WA 98116'
      message='Are you avoiding me?'
      date='2022-04-12T16:39:10.389271+00:00'
    />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  id: 713,
  address: '2733 49th Ave SW Seattle, WA 98116',
  message: 'Hey, are you getting my messages?',
  date: '2022-04-12T16:39:10.389271+00:00',
}
export const List = SampleListTemplate.bind({})
List.args = {
  id: 713,
  address: '2733 49th Ave SW Seattle, WA 98116',
  message: 'Hey, are you getting my messages?',
  date: '2022-04-12T16:39:10.389271+00:00',
}
