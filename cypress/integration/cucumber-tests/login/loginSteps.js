import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import LoginPage from './loginPage';

const loginPage = new LoginPage();
Given('I navigate to login page', () => {
  cy.visit(`${Cypress.config().baseUrl}/login`);
});

When('I sign in with valid {string} and {string}', (username, password) => {
  // eslint-disable-next-line no-shadow
  loginPage.pageHasLoaded(loginPage.txtboxUserName);
  loginPage.loginAsUser(username, password);
});

Then('I should see homepage', () => {
  cy.get('a.i-menu-user-username pointer').should('be.visible');
  cy.get('a[automation-id = "menu-user-page-link"]').contains('mammachetorro');
});

Then('I should be shown an error message', () => {
  loginPage.ShouldShowErrorMessage();
});
