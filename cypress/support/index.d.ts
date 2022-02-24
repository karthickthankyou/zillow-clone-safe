declare namespace Cypress {
  interface Chainable<Subject = string> {
    mount(children): Chainable<any>
    reactComponent(): Chainable<any>
    setTransactionAmountRange(min: number, max: number): Chainable<any>
    setSlider(value: number | number[]): Chainable<void>
  }
}
