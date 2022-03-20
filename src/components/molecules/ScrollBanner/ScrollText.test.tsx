import React from 'react'
import { render } from '@testing-library/react'
import ScrollText from './ScrollText'

describe('ScrollBanner Component', () => {
  test('ScrollBanner renders', () => {
    render(<ScrollText input={['Hello', 'World']} />)
  })
})
