/* eslint-disable @typescript-eslint/no-unused-vars */
declare namespace Cypress {
  interface Chainable<Subject> {
    reactComponent(): Chainable<string>
  }
}
