import React from 'react'
import { mount } from '@cypress/react'
import SignIn from './SignIn'

describe('SignIn Component', () => {
  beforeEach(() => {
    mount(<SignIn />)
  })
  it('SignIn renders', () => {})
  it('SignIn still renders', () => {})
})
