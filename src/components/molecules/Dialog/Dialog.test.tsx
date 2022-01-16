import React from 'react'
import { render } from '@testing-library/react'
import Dialog from './Dialog'

describe('Dialog Component', () => {
  test('Dialog renders', () => {
    render(
      <Dialog open setOpen={() => {}}>
        <div>Hello</div>
      </Dialog>
    )
  })
})
