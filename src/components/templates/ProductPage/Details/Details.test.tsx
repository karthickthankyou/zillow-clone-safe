import React from 'react'
import { render } from '@testing-library/react'
import Details from './Details'

describe('Details Component', () => {
  test('Details renders', () => {
    render(
      <Details title='Hey' content={[{ title: 'Hello', content: ['hello'] }]} />
    )
  })
})
