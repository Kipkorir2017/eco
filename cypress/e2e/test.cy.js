describe('meter management', ()=>{
    it('To login to saucedemo page ',()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type("standarduser");
        cy.get('#password').type("secret_sauce");

        cy.get('#login-button').click()
        cy.wait(900000);
    })
})