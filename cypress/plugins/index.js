/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

import injectNextDevServer from '@cypress/react/plugins/next'

const codeCoverageTask = require('@cypress/code-coverage/task')

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  if (config.testingType === 'component') {
    injectNextDevServer(on, config)
  }
  codeCoverageTask(on, config)

  return config
}
