const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl: 'https://rayfronterwebbogo.homologacao.ncs.com.br:2705',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
