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

import { mount as cypressMount, MountOptions } from '@cypress/react'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as UrqlProvider, Client as UrqlClient } from 'urql'
import { client as urqlClient } from 'src/config/urqlClientWonka'
import { RootState, store as actualStore } from 'src/store'
import { EnhancedStore } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

/**
 * About cypress mount
 * https://github.com/cypress-io/cypress/blob/develop/npm/react/docs/providers-and-composition.md
 */

export type CustomMountOptions = MountOptions & {
  client: UrqlClient
  reduxStore: EnhancedStore<RootState>
}

export const createMount =
  (
    { client, reduxStore, ...mountOpts }: CustomMountOptions = {
      client: urqlClient,
      reduxStore: actualStore,
    }
  ) =>
  (children: ReactNode) => {
    cypressMount(
      <UrqlProvider value={client}>
        <ReduxProvider store={reduxStore}>{children}</ReduxProvider>
      </UrqlProvider>,
      mountOpts
    )
  }

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
