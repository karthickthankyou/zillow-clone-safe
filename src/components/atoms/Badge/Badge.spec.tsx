import React from 'react'
import Badge from './Badge'

describe('Badge Component', () => {
  it('should render', () => {
    cy.mount(<Badge>Hello</Badge>)
  })
  it('should render as sm', () => {
    cy.mount(<Badge size='sm'>Hello</Badge>)
  })
  it('should render as md', () => {
    cy.mount(<Badge size='md'>Hello</Badge>)
  })
  it('should render as lg', () => {
    cy.mount(<Badge size='lg'>Hello</Badge>)
  })
})
