import React from 'react'
import { render } from '@testing-library/react'
import { homeData } from 'src/mocks/data/homes'
import MainCard from './MainCard'

describe('MainCard Component', () => {
  test('MainCard renders', () => {
    render(<MainCard home={homeData} scrollToContactForm={() => {}} />)
  })
})
