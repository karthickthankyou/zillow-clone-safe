import React from 'react'
import { render } from '@testing-library/react'
import Layout from './Layout'

describe('Layout Component', () => {
  test('Layout renders', () => {
    render(
      <Layout>
        <div>Hello</div>
      </Layout>
    )
  })
})
