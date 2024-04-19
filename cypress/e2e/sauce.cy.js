describe('Sauce Demo Login', () => {
    it('should log in with valid credentials', () => {
      // Visit the Sauce Demo website
      cy.visit('https://www.saucedemo.com/');
  
      // Type username into the username input field
      cy.get('#user-name').type('standard_user');
  
      // Type password into the password input field
      cy.get('#password').type('secret_sauce');
  
      // Click on the login button
      cy.get('#login-button').click();

      cy.get('#add-tocart-saucs-labs-backpack').click();
   

     cy.url().should('include', '/inventory.html');
     cy.get('.inventory_list input[type="text"]').type('sauce');
    
     cy.contains('.inventory_item_name', 'Sauce Labs Backpack').parent()
     .find('.btn_inventory')
     .click();

     cy.get('.shopping_cart_badge').should('have.text','1');
      // Assertions or further actions can be added here
      cy.wait(500000);
    });
  });
  