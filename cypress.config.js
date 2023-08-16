const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    setupNodeEvents,
    //"defaultCommandTimeout": 10000,
    "viewportWidth": 1920,
    "viewportHeight": 1400,
    baseUrl: "https://",
    chromeWebSecurity: false,
    video: false,
    screenshotOnRunFailure: true
  },
});
