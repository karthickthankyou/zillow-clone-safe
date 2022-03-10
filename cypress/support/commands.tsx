// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'

import { mount as cypressMount } from '@cypress/react'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as UrqlProvider } from 'urql'
import { client } from 'src/config/urqlClient'
import { store as actualStore } from 'src/store'
import { ReactElement } from 'react'
import { Children } from 'src/types'

Cypress.Commands.add('mount', (children: Children) =>
  cypressMount(
    <UrqlProvider value={client}>
      <ReduxProvider store={actualStore}>{children}</ReduxProvider>
    </UrqlProvider>
  )
)

Cypress.Commands.add(
  'reactComponent',
  {
    prevSubject: 'element',
  },
  ($el) => {
    if ($el.length !== 1) {
      throw new Error(
        `cy.component() requires element of length 1 but got ${$el.length}`
      )
    }

    // Query for key starting with __reactInternalInstance$ for React v16.x
    const reactFiber = Object.keys($el.get(0)).find((key) =>
      key.startsWith('__reactFiber$')
    )
    const domFiber = $el.prop(reactFiber!)
    return domFiber.child.memoizedProps.ownerState
  }
)

// cy.findByTestId('transaction-list-filter-amount-range-button')
//   .scrollIntoView()
//   .click({ force: true })
Cypress.Commands.add('setTransactionAmountRange', (min, max) =>
  cy
    .findByTestId('slider')
    .reactComponent()
    .its('memoizedProps')
    .invoke('onChange', null, [min, max])
)
