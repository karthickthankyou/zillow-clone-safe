import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MessageCard from './MessageCard'

export default {
  title: 'src/components/organisms/MessageCard',
  component: MessageCard,
} as ComponentMeta<typeof MessageCard>

const Template: ComponentStory<typeof MessageCard> = (args) => (
  <MessageCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  id: 713,
  address: '2733 49th Ave SW Seattle, WA 98116',
  message: 'Hey, are you getting my messages?',
  date: '2022-04-12T16:39:10.389271+00:00',
}
Primary.parameters = {}
