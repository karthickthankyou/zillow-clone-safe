import React from 'react'
import { render } from '@testing-library/react'
import PopoverMenuItem from './PopoverMenuItem'

describe('PopoverMenuItem Component', () => {
  test('PopoverMenuItem renders', () => {
    render(
      <PopoverMenuItem>
        <div>Hello</div>
      </PopoverMenuItem>
    )
  })
})
