import React from 'react'
import { render } from '@testing-library/react'
import { MapProvider } from 'src/store/map/mapContext'
import Mapbox from './Mapbox'

describe('Mapbox Component', () => {
  test('Mapbox renders', () => {
    render(
      <MapProvider>
        <Mapbox>
          <div>Hello</div>
        </Mapbox>
      </MapProvider>
    )
  })
})
