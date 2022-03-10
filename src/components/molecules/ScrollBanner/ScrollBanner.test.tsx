import React from 'react'
import { render } from '@testing-library/react'
import ScrollBanner from './ScrollBanner'

describe('ScrollBanner Component', () => {
  test('ScrollBanner renders', () => {
    render(<ScrollBanner input={['Hello', 'World']} />)
  })
})
