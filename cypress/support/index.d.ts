declare namespace Cypress {
  interface Chainable<Subject = string> {
    mount(children): Chainable<any>
  }
}
