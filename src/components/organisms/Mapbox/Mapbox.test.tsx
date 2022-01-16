import React from 'react'
import { render } from '@testing-library/react'
import Mapbox from './Mapbox'

describe('Mapbox Component', () => {
  test('Mapbox renders', () => {
    render(<Mapbox />)
  })
})
