import React from 'react'
import { render } from '@testing-library/react'
import Mapbox from './Mapbox'

describe('Mapbox Component', () => {
  test('Mapbox renders', () => {
    render(<Mapbox latitude={23.3} longitude={34.3} zoom={8} markers={[]} />)
  })
})
