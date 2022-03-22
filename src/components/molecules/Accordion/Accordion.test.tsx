import React from 'react'
import { render } from '@testing-library/react'
import Accordion from './Accordion'

describe('Accordion Component', () => {
  test('Accordion renders', () => {
    render(
      <Accordion title='Title'>
        <div>Hello</div>
      </Accordion>
    )
  })
})
