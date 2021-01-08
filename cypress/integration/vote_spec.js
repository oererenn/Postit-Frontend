describe('Vote', function () {
    it("Performs Vote", function () {
        cy.visit("http://localhost:3000/login")
        cy.url().should('match', /login/)
        cy.get("#username").type('omer').should('have.value', 'omer')

        cy.get("#password").type('12345678').should('have.value', '12345678')
        cy.get('#loginForm').submit()
        cy.get('#upVote').click()
        cy.get('#voteCount').then(($el) => {
            const text = $el.text();
            expect(text).to.equal("1")
        })
         cy.get('#upVote').click()
         cy.get('#voteCount').then(($el) => {
             const text = $el.text();
             expect(text).to.equal("0")
         })
        cy.get('#downVote').click()
        cy.get('#voteCount').then(($el) => {
            const text = $el.text();
            expect(text).to.equal("-1")
        })
        
        cy.get('#downVote').click()
        cy.get('#voteCount').then(($el) => {
            const text = $el.text();
            expect(text).to.equal("0")
        })
        cy.get('#upVote').click()
        cy.get('#voteCount').then(($el) => {
            const text = $el.text();
            expect(text).to.equal("1")
        })
        cy.get('#downVote').click()
        cy.get('#voteCount').then(($el) => {
            const text = $el.text();
            expect(text).to.equal("-1")
        })
        cy.get('#upVote').click()
        cy.get('#voteCount').then(($el) => {
            const text = $el.text();
            expect(text).to.equal("1")
        })
        cy.get('#upVote').click()
        cy.get('#voteCount').then(($el) => {
            const text = $el.text();
            expect(text).to.equal("0")
        })
    })
})