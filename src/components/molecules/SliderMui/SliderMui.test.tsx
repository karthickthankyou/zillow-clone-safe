import React from 'react'
import { render } from '@testing-library/react'
import SliderMui from './SliderMui'

describe('SliderMui Component', () => {
  test('SliderMui renders', () => {
    render(
      <SliderMui
        initialData={[0, 100]}
        step={12}
        value={[34, 56]}
        onChange={() => {}}
      />
    )
  })
})
