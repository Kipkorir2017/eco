describe("Meter management Automation",()=>{
    it('Meter awaiting testing ',()=>{
        cy.visit('https://nextgen.ngi-test.iner.gy/');
        cy.contains("with").click();

        cy.origin("https://ngi-auth-ngi-test.auth.eu-west-1.amazoncognito.com", () => {
        cy.get('.panel-right-border > :nth-child(1) > :nth-child(1) > :nth-child(1) > form > div > .btn').click()
            
              })
        cy.contains('TAMTAM Requests').click();
        cy.visit("https://nextgen.ngi-test.iner.gy/tam/requests")
        cy.contains('NEW REQUEST' ).click();
        cy.contains('Single Request').click();

        cy.wait(5000000);
    })
})