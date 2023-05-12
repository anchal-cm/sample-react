/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('cypress');
const cypressFirebasePlugin = require('cypress-firebase').plugin;
const admin = require('firebase-admin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return cypressFirebasePlugin(on,config,admin, {projectId:"tanzania-370714"});
      
    },
  },
});
