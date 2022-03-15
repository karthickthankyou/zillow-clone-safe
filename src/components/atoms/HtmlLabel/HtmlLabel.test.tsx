import React from 'react'
import { render } from '@testing-library/react'
import HtmlLabel from './HtmlLabel'

describe('HtmlLabel Component', () => {
  test('HtmlLabel renders', () => {
    render(<HtmlLabel title='Title'>Children</HtmlLabel>)
  })
})
