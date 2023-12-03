const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"http://wpmediatest.local/",
    // baseUrl: "http://localhost:10005/?username=root&db=local",
    supportFile: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
