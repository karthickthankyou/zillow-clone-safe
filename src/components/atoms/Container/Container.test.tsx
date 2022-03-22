import React from 'react'
import { render } from '@testing-library/react'
import Container from './Container'

describe('Container Component', () => {
  test('Container renders', () => {
    render(<Container>Hello</Container>)
  })
})
