import React from 'react'
import { render } from '@testing-library/react'
import Sidebar from './Sidebar'

describe('Sidebar Component', () => {
  test('Sidebar renders', () => {
    render(<Sidebar />)
  })
})
