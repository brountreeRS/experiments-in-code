/// <reference types="Cypress" />

context('Connectors', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/experiments/')
  })

  it('.each() - iterate over an array of elements', () => {
    // https://on.cypress.io/each
    cy.get('.experimentlist>li')
      .each(($el, index, $list) => {
        console.log($el, index, $list)
      })
  })

  it('.its() - get properties on the current subject', () => {
    // https://on.cypress.io/its
    cy.get('.experimentlist>li')
      // calls the 'length' property yielding that value
      .its('length')
      .should('be.gt', 16)
  })

  it('.invoke() - invoke a function on the current subject', () => {
    // our div is hidden in our script.js
    // $('.connectors-div').hide()

    // https://on.cypress.io/invoke
    cy.get('div.popup2').should('be.hidden')
      // call the jquery method 'show' on the 'div.container'
      .invoke('show')
      .should('be.visible')
  })

  it('.spread() - spread an array as individual args to callback function', () => {
    // https://on.cypress.io/spread
    const arr = ['foo', 'bar', 'baz']

    cy.wrap(arr).spread((foo, bar, baz) => {
      expect(foo).to.eq('foo')
      expect(bar).to.eq('bar')
      expect(baz).to.eq('baz')
    })
  })

  it('.then() - invoke a callback function with the current subject', () => {
    // https://on.cypress.io/then
    cy.get('.experimentlist>li').then(($lis) => {
      expect($lis).to.have.length(17)
      expect($lis.eq(0)).to.contain('Animated')
      expect($lis.eq(1)).to.contain('Backgrounds')
      expect($lis.eq(2)).to.contain('Letter')
    })
  })
})
