/// <reference types="Cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500')
    cy.get('div.left').contains('logo').click()
    cy.get('div.right').contains('Experiments').click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {
    // https://on.cypress.io/go

    cy.location('pathname').should('include', 'experiments')

    cy.go('back')
    cy.location('pathname').should('not.include', 'experiments')

    cy.go('forward')
    cy.location('pathname').should('include', 'experiments')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', 'experiments')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', 'experiments')
  })

  it('cy.reload() - reload the page', () => {
    // https://on.cypress.io/reload
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('cy.visit() - visit a remote url', () => {
    // https://on.cypress.io/visit

    // Visit any sub-domain of your current domain

    // Pass options to the visit
    cy.visit('http://localhost:5500/ben/', {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
      onLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
    })
    })
})
