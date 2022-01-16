import React from 'react'
import { render } from '@testing-library/react'
import CityCard from './CityCard'

describe('CityCard Component', () => {
  test('CityCard renders', () => {
    render(<CityCard />)
  })
})
