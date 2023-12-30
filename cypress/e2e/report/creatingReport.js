context("One e2e flow of flipcart",()=> {
    it("step1 is login",()=> {
        cy.visit('https://www.flipkart.com/')
        cy.login1('iuytfg',"iuyf");
        console.log("Hii ",Cypress.config().baseUrl,"and ",h)
        cy.search("T-Shirts");
        cy.get('._3704LK').should('be.visible').click();
        cy.get('._3704LK').type('tshirts for women');
        console.log("Current url is : ",cy.url())
        cy.search('tshirts for women');
        cy.get(".KK-o3G").click();
        cy.placeOrder();
    })
})

describe("Testing the application", function() {
    it("should login with username and password", function() {

        // visit the lambdageeks page
        cy.visit('https://demo.applitools.com/')

    });
    it("type user name", function() {
        cy.get('#username').type('test123');
    })
    it("type user password", function() {
        cy.get('#password').type('123');
    })
    it("click login", function() {
        cy.get('#log-in').click();
        cy.url().should('include', '/app')
    })
});


const h = 'khi';
