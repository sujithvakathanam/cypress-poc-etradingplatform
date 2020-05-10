import {Given} from 'cypress-cucumber-preprocessor/steps';

Given('I should see {string} in the url', url => {
  cy.url().should('include', url);
});

Given('I view {string} in the title', title => {
  cy.title().should('include', title);
});
