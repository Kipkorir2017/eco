describe('sms management',()=>{
    it('automation of sms mgmnt sms provider',()=>{
        cy.visit('https://nextgen.ngi-test.iner.gy/');
        cy.contains("with").click();
        cy.origin("https://ngi-auth-ngi-test.auth.eu-west-1.amazoncognito.com", () => {
        cy.get('.panel-right-border > :nth-child(1) > :nth-child(1) > :nth-child(1) > form > div > .btn').click();

    })
    cy.contains('SMS Management').click();
    cy.contains('SMS ProviderSMS Provider').click();
    cy.visit('https://nextgen.iner.gy/sms/sms-provider').click();

        cy.wait(50000);


    })
})