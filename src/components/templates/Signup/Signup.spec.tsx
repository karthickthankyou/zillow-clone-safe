import React from 'react'
import { mount } from '@cypress/react'
import Signup from './Signup'

describe('Signup Component', () => {
  beforeEach(() => {
    mount(<Signup />)
  })
  it('SignUp renders', () => {})
  it('SignUp still renders', () => {})
})
