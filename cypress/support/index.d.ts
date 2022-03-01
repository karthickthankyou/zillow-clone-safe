/* eslint-disable @typescript-eslint/no-unused-vars */
declare namespace Cypress {
  interface Chainable<Subject = string> {
    mount(children): Chainable<string>
    reactComponent(): Chainable<string>
    setTransactionAmountRange(min: number, max: number): Chainable<string>
  }
}
