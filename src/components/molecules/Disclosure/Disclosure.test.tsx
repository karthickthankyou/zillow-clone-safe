import React from 'react'
import { render } from '@testing-library/react'
import Disclosure from './Disclosure'

describe('Disclosure Component', () => {
  test('Disclosure renders', () => {
    render(
      <Disclosure title=' string'>
        <div>Hello World</div>
      </Disclosure>
    )
  })
})
