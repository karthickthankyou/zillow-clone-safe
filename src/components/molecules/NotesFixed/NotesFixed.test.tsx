import React from 'react'
import { render } from '@testing-library/react'
import NotesFixed from './NotesFixed'

describe('NotesFixed Component', () => {
  test('NotesFixed renders', () => {
    render(<NotesFixed>Sample text</NotesFixed>)
  })
})
