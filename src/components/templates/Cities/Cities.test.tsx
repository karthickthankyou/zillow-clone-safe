import React from 'react'
import { render } from '@testing-library/react'
import Cities from './Cities'

describe('Cities Component', () => {
  test('Cities renders', () => {
    render(
      <Cities title='sdf' description='sdf'>
        <div>Hello</div>
        <div>Hello</div>
      </Cities>
    )
  })
})
