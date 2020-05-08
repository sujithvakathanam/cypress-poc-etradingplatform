/*
 * ***********************************************
 * This example commands.js shows you how to
 * create various custom commands and overwrite
 * existing commands.
 *
 * For more comprehensive examples of custom
 * commands please read more here:
 * https://on.cypress.io/custom-commands
 * ***********************************************
 *
 *
 * -- This is a child command --
 * Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
 *
 *
 * -- This is a dual command --
 * Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
 *
 *
 * -- This will overwrite an existing command --
 * Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
 */

/* -- This is a parent command */
Cypress.Commands.add('login', (username, password) => {
  cy.clearCookies;
  cy.clearLocalStorage;
  cy.get('input[name = "username"]').type(username);
  cy.get('#password').type(password);

  cy.get('input[type="checkbox"]').click();
  cy.get('button[automation-id="login-sts-btn-sign-in"]').contains('Sign in')
    .click();
});
