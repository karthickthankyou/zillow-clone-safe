before(() => {
  cy.readFile('./cypress/plugins/globals.css').then((css) => {
    if (!document.head.querySelector('#tailwind-style')) {
      const link = document.createElement('style')
      link.id = 'tailwind-style'
      link.innerHTML = css
      document.head.appendChild(link)
    }
  })
})
