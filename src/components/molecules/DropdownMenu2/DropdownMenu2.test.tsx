import React from 'react'
import { render } from '@testing-library/react'
import DropdownMenu2 from './DropdownMenu2'

describe('DropdownMenu2 Component', () => {
  test('DropdownMenu2 renders', () => {
    render(
      <DropdownMenu2 title='sample'>
        <div>Hello</div>
      </DropdownMenu2>
    )
  })
})
