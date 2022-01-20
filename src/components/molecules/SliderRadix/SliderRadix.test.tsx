import React from 'react'
import { render } from '@testing-library/react'
import SliderRadix from './SliderRadix'

describe('SliderRadix Component', () => {
  test('SliderRadix renders', () => {
    render(
      <SliderRadix max={34} onChange={() => {}} onBlur={() => {}} value={7} />
    )
  })
})
