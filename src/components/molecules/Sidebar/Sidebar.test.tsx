import React, { useState } from 'react'
import { render } from '@testing-library/react'
import Sidebar from './Sidebar'

describe('Sidebar Component', () => {
  test('Sidebar renders', () => {
    const [open, setOpen] = useState(false)
    render(
      <Sidebar open={open} setOpen={setOpen}>
        <div>Children</div>
      </Sidebar>
    )
  })
})
