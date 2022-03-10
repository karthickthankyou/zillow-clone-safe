import React from 'react'
import { render } from '@testing-library/react'
import UrqlProvider from './UrqlProvider'

describe('UrqlProvider Component', () => {
  test('UrqlProvider renders', () => {
    render(<UrqlProvider>hello</UrqlProvider>)
  })
})
