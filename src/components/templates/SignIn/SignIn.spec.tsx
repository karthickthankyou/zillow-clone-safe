import React from 'react'
import { mount } from '@cypress/react'
import SignIn from './Signin'

describe('SignIn Component', () => {
  beforeEach(() => {
    mount(<SignIn />)
  })
  it('SignIn renders', () => {})
  it('SignIn still renders', () => {})
})
