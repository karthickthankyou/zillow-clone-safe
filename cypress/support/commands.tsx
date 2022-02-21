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
import { Provider } from 'urql'
import { client } from 'src/config/urql'
import { store as actualStore } from 'src/store'
import { ReactElement } from 'react'

Cypress.Commands.add('mount', (children: ReactElement) =>
  cypressMount(
    <Provider value={client}>
      <ReduxProvider store={actualStore}>{children}</ReduxProvider>
    </Provider>
  )
)
