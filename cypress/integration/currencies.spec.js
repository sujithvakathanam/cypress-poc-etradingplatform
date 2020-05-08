// /<reference types = "cypress" />

import HomePage from '../pages/homePage';
import CurrenciesPage from '../pages/currenciesPage';

describe('Currencies Functionality', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  const homePage = new HomePage();

  it('should() display currencies page', () => {
    homePage.pageHasLoaded();
    homePage.navigateToCurrenciesScreen();
    CurrenciesPage.headerTextValidation();
  });
});
