const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1360,
  viewportHeight: 790,
  defaultCommandTimeout: 30000,
  env: {
    allureResultsPath: 'test-report/allure-results',
    allure: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://casinoscanada.com/'
  },
});
