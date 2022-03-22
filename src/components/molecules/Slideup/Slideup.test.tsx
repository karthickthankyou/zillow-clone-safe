import React from 'react'
import { render } from '@testing-library/react'
import Slideup from './Slideup'

describe('Slideup Component', () => {
  test('Slideup renders', () => {
    render(
      <Slideup>
        <div>Hello</div>
      </Slideup>
    )
  })
})
