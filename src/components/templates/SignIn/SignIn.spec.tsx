import React from 'react'
import { mount } from '@cypress/react'
import Signin from './Signin'

describe('Signin Component', () => {
  beforeEach(() => {
    mount(<Signin />)
  })
  it('Signin renders', () => {})
  it('Signin still renders', () => {})
})
