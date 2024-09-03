const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl: 'http://10.7.0.42:2800/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
