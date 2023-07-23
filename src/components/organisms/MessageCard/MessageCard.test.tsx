import { mount } from '@cypress/react'
import MessageCard from './MessageCard'

describe('MessageCard Component', () => {
  it('MessageCard renders', () => {
    mount(
      <MessageCard
        message={{
          id: 713,
          message: 'Hey, are you getting my messages?',
          createdAt: '2022-04-12T16:39:10.389271+00:00',
          property: {
            id: 1,
            imgs: [],
            price: 120,
            address: '2733 49th Ave SW Seattle, WA 98116',
          },
        }}
      />
    )
  })
})
