import React from 'react'
import { render } from '@testing-library/react'
import MenuItem from './MenuItem'

describe('MenuItem Component', () => {
  test('MenuItem renders', () => {
    render(
      <MenuItem title='Title'>
        <div>Helo</div>
      </MenuItem>
    )
  })
})
