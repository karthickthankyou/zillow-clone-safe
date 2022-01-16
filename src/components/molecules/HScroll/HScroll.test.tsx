import React from 'react'
import { render } from '@testing-library/react'
import HScroll from './HScroll'

describe('HScroll Component', () => {
  test('HScroll renders', () => {
    render(
      <HScroll>
        <div>Hello</div>
        <div>Hello</div>
      </HScroll>
    )
  })
})
