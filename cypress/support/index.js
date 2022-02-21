// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '../plugins/addCSS'

// import '../../src/globals.css'

// import '../../src/globals-cypress.css'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import '@cypress/code-coverage/support'
/**
 * https://medium.com/geekculture/component-testing-next-js-application-with-cypress-28fa311adda6
 * https://stackoverflow.com/questions/70306004/running-cypress-tests-with-tailwindcss-3
 */

import { setupMockServer } from '../../src/mocks'

Cypress.on('test:before:run:async', async () => {
  if (window.msw) {
    console.log('MSW is already running.')
  }

  if (!window.msw) {
    console.log('Starting MSW...')
    await setupMockServer()
  }
})
