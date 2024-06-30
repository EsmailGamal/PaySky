const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mocha',
  reporterOptions: {
    reportDir: 'allure-results',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin/writer')(on, config);
      return config;
    },
    baseUrl: 'https://demo.nopcommerce.com/', // Add your application's base URL here
    specPattern: 'cypress/e2e/Tests/**/*.spec.cy.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 90000,
    responseTimeout: 90000,
    watchForFileChanges: false,
  },
});
