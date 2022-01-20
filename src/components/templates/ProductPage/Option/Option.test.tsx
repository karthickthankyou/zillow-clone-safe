import React from 'react'
import { render } from '@testing-library/react'
import Option from './Option'

describe('Option Component', () => {
  test('Option renders', () => {
    render(<Option title='title' content={['Content']} />)
  })
})
