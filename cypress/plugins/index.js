const cucumber = require('cypress-cucumber-preprocessor').default;
const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin');
const percyHealthCheck = require('@percy/cypress/task');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
};

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  on('task', percyHealthCheck);
};
