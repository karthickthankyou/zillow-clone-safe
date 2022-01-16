import React from 'react'
import { render } from '@testing-library/react'
import Link from './Link'

describe('Link Component', () => {
  test('Link renders', () => {
    render(<Link href='/'>Link</Link>)
  })
})
