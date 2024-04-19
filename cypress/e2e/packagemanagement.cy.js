describe('package management',()=>{
    it('automation of new package creation',()=>{
        cy.visit('https://nextgen.ngi-test.iner.gy/');
        cy.contains("with").click();
        cy.origin("https://ngi-auth-ngi-test.auth.eu-west-1.amazoncognito.com", () => {
        cy.get('.panel-right-border > :nth-child(1) > :nth-child(1) > :nth-child(1) > form > div > .btn').click();




    })
    cy.contains('Package Management').click();
    cy.contains('All Packages').click()
    cy.contains('New Package').click();
    cy.get('#newPackage_type').click();
    cy.contains('Outright Purchase').click();
   


    cy.get('[placeholder="Enter unique package code"]').type('1234');
    cy.get('[placeholder="Enter package name"]').click();
    cy.get('[placeholder="Enter package name"]').type('Benjaa-outright');
    cy.get('[placeholder="Enter the full price of stove"]').click();
    cy.get('[placeholder="Enter the full price of stove"]').type('2700');
    cy.get('[placeholder="Enter initial gas payment"]').click();
    cy.get('[placeholder="Enter initial gas payment"]').type('250');
    cy.get('[placeholder="Enter stove repair cost"]').click();
    cy.get('[placeholder="Enter stove repair cost"]').type('200');
    cy.get('#newPackage_warrantyDuration').click();
    cy.get('#newPackage_warrantyDuration').type('2');
    cy.get('#newPackage_stoveChangeEligibilityDuration').click();
    cy.get('#newPackage_stoveChangeEligibilityDuration').type('20');
    // cy.get('[placeholder="Enter the total number of stove changes"]').click();
  
    // cy.get('[placeholder="Enter the total number of stove changes"]').type('2');
    // cy.get('div:nth-child(12) > .jss110 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click();
    // cy.contains('Cylinder, owned by:').check();
//   await page1.getByLabel('Meter, owned by:').check();
//   await page1.getByLabel('Card, owned by:').check();
//   await page1.getByLabel('Stove, owned by:').check();
//   await page1.locator('.ant-select-selection-overflow').click();
//   await page1.getByTitle('BUNGOMA').locator('div').click();
//   await page1.locator('.jss87 > div').click();
//   await page1.locator('div:nth-child(12) > .jss110 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click();
//   await page1.getByText('Upon Payment').click({
//     clickCount: 3

    

})
})