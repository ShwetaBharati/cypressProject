const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    charts: true,
    reportPageTitle: 'Recon Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    //   reportDir: "cypress/report/",
  },


  defaultCommandTimeout: 20000,

  e2e: {
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      allureWriter(on, config);

      //  added now
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
      return config;
    },

    //specPattern: "cypress/e2e/feature/*.feature",
    specPattern: "cypress/e2e/feature/HappyPathFlow/*.feature",
    //specPattern: 'cypress/e2e/*.cy.js',

    chromeWebSecurity: false,

    experimentalModifyObstructiveThirdPartyCode: true,

    experimentalRunAllSpecs: true,

    failOnStatusCode: false,

    baseUrl: "https://uat-reconpartners.successive.work/?company=3&store=18",
    
    scrollBehavior: 'nearest',

    productName: 'Recon',
  },
});
