import React from 'react'
import { render } from '@testing-library/react'
import MenuItemPartition from './MenuItemPartition'

describe('MenuItemPartition Component', () => {
  test('MenuItemPartition renders', () => {
    render(<MenuItemPartition text={{ title: '', subTitles: [''] }} />)
  })
})
