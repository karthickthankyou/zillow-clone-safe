import React from 'react'
import { render } from '@testing-library/react'
import { HomeMarkers } from './MapboxContent'

describe('MapboxContent Component', () => {
  test('MapboxContent renders', () => {
    render(<HomeMarkers />)
  })
})
