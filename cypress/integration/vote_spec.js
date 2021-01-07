describe('Vote', function () {
    it("Performs Vote", function () {
        cy.visit("http://localhost:3000/login")
        cy.url().should('match', /login/)
        cy.get("#username").type('omer').should('have.value', 'omer')

        cy.get("#password").type('12345678').should('have.value', '12345678')
        cy.get('#loginForm').submit()
        cy.get('#voteCount').should('have.value', '')
        cy.get('#upVote').click()
        cy.get('#downVote').click()
        cy.get('#downVote').click()
        cy.get('#upVote').click()
        cy.get('#downVote').click()
        cy.get('#upVote').click()
        cy.get('#upVote').click()
    })
})