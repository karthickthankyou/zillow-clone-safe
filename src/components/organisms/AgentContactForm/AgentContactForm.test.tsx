import React from 'react'
import { render } from '@testing-library/react'
import { AgentContactForm } from './AgentContactForm'

describe('AgentContactForm Component', () => {
  test('AgentContactForm renders', () => {
    render(<AgentContactForm homeId={34} />)
  })
})
