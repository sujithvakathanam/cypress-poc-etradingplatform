import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';
import '@percy/cypress';

addMatchImageSnapshotCommand({
  failureThreshold     : 0.0,
  failureThresholdType : 'percent',
  customDiffConfig     : {threshold : 0.0},
  capture              : 'viewport'
});

Cypress.Commands.add('setResolution', size => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1]);
  } else {
    cy.viewport(size);
  }
});

Cypress.Commands.add('login', (username, password) => {
  cy.clearCookies;
  cy.clearLocalStorage;
  cy.get('input[name = "username"]').type(username);
  cy.get('#password').type(password);

  cy.get('input[type="checkbox"]').click();
  cy.get('button[automation-id="login-sts-btn-sign-in"]').contains('Sign in')
    .click();
});
