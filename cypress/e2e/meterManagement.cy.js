describe("Meter management Automation",()=>{
    afterEach(()=>{
        cy.reload()
    })
    it('Meter awaiting testing ',()=>{
        cy.visit('https://nextgen.ngi-test.iner.gy/');
        cy.contains("with").click();

        cy.origin("https://ngi-auth-ngi-test.auth.eu-west-1.amazoncognito.com", () => {
        cy.get('.panel-right-border > :nth-child(1) > :nth-child(1) > :nth-child(1) > form > div > .btn').click()
            
              })

        cy.contains('Meter Management').click();

        cy.contains('Awaiting Process').click();
        cy.visit('https://nextgen.ngi-test.iner.gy/meters/awaiting/testing');
        cy.get('#horizontal_login_type').click();
        cy.contains('Meter barcode').click();
        cy.get("#horizontal_login_value").type("NGI-MOCK-QA2050");
        cy.contains('Search').click();

        // cy.contains('action-icon').first().click();
        // cy.get('div').filter({ hasText: /^Please select resolution$/ }).nth(1).click();
        // cy.get('Certified').locator('div').click();
 
        // cy.get('Enter value').type('KEN0389491');
        // cy.contains('Search').click();
        // cy.contains('action-icon').get('div').click();
        // cy.get('.ant-modal-body').click();
        


        cy.wait(5000000);

    })
})