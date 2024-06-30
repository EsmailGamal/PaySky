// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './commands'
require('cypress-xpath')
import 'cypress-xpath';
import '@shelex/cypress-allure-plugin';


// cypress/support/index.js or cypress/support/e2e.js
beforeEach(() => {
  cy.clearAllCookies()
  cy.clearAllLocalStorage()
  cy.clearAllSessionStorage()
    // Listen to uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Returning false here prevents Cypress from failing the test
      return false;
    });
      cy.visit('/'); // Replace with the actual URL of your website
      cy.get('#customerCurrency').should('be.visible'); // Replace with a unique selector to confirm the homepage
    });

// Alternatively you can use CommonJS syntax:
// require('./commands')