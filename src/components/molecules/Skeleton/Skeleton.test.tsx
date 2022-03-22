import React from 'react'
import { render } from '@testing-library/react'
import Skeleton from './Skeleton'

describe('Skeleton Component', () => {
  test('Skeleton renders', () => {
    render(<Skeleton />)
  })
})
