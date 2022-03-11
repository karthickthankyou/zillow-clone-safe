import React from 'react'
import { render } from '@testing-library/react'
import PopupHomesContent from './PopupHomesContent'

describe('PopupHomesContent Component', () => {
  test('PopupHomesContent renders', () => {
    render(<PopupHomesContent id={34} wishlisted />)
  })
})
