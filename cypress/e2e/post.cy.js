import { slowCypressDown } from 'cypress-slow-down'
// slow down each command by the default amount
// which is 1 second
slowCypressDown(1000)

describe('empty spec', () => {
    describe('Test for a New Post', () => {
      it('Adds a new post', () => {
        cy.visit('http://localhost:3000/UserFeed')
        // cy.contains('type')
        cy.get('input#formBasicPost.form-control').type("want to buy an ipad")
        cy.get('textarea#formBasicPost.form-control').type('latest model only')
        cy.get('button.btn.btn-primary').click()
      })
    })
  })