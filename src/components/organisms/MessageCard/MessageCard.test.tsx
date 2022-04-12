import { mount } from '@cypress/react'
import MessageCard from './MessageCard'

describe('MessageCard Component', () => {
  it('MessageCard renders', () => {
    mount(
      <MessageCard
        id={713}
        address='2733 49th Ave SW Seattle, WA 98116'
        message='Hey, are you getting my messages?'
        date='2022-04-12T16:39:10.389271+00:00'
      />
    )
  })
})
