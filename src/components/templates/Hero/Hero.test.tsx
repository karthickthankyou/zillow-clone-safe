import React from 'react'
import { render } from '@testing-library/react'
import Hero from './Hero'

describe('Hero Component', () => {
  test('Hero renders', () => {
    render(<Hero />)
  })
})
