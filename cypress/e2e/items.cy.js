import { slowCypressDown } from 'cypress-slow-down'
// slow down each command by the default amount
// which is 1 second
slowCypressDown(1000)

describe('empty spec', () => {
    describe('Test to add a new Item', () => {
      it('Adds a new item', () => {
        cy.visit('http://localhost:3000/BuyAndSell')
        // cy.contains('type')
        cy.get('button.btn.btn-primary').click()
        cy.get('input[name=item]').type('pillow')
        cy.get('input[name=price]').type('50')
        cy.get('textarea[name=desc]').type('memory foam pillow')
        cy.get('button[name=save]').click()
      })
    })
  })