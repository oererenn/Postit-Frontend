describe('Register', function () {
    it("Performs Login", function () {
        cy.visit("http://localhost:3000/register")
        cy.url().should('match', /register/)

        cy.get("#username").type('oereren27').should('have.value', 'oereren27')
        cy.get("#email").type('oereren@hotmail.com').should('have.value', 'oereren@hotmail.com')
        cy.get("#password").type('12345678Test@').should('have.value', '12345678Test@')
        cy.get('#loginForm').submit()
    })
})

describe('Login', function () {
    it("Performs Login", function () {
        cy.visit("http://localhost:3000/login")
        cy.url().should('match', /login/)
        cy.get("#username").type('omer').should('have.value', 'omer')

        cy.get("#password").type('12345678').should('have.value', '12345678')
        cy.get('#loginForm').submit()
        // Verify the app redirected you to the homepage
        cy.location('pathname', {
            timeout: 10000
        }).should('eq', '/home');
        // Verify the page title is "Home"
        cy.title().should('eq', 'Home');

    })
})

describe('Submit Post', function () {
    it("Submits a post", function () {
        cy.visit("http://localhost:3000/login")
        cy.url().should('match', /login/)
        cy.get("#username").type('omer').should('have.value', 'omer')

        cy.get("#password").type('12345678').should('have.value', '12345678')
        cy.get('#loginForm').submit()
        // Verify the app redirected you to the homepage
        cy.location('pathname', {
            timeout: 10000
        }).should('eq', '/home');
        // Verify the page title is "Home"
        cy.title().should('eq', 'Home');
        cy.visit("http://localhost:3000/submit")
        cy.url().should('match', /submit/)
        cy.get("#community").select("1").should("have.value",'1')

        cy.get("#title").type("This is a test title").should("have.value", 'This is a test title')
        cy.get("#description").type("This is a test description").should("have.value", 'This is a test description')
        cy.get("#submitPostButton").click();

    })
})