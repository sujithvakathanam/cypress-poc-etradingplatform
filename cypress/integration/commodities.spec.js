import CommoditiesPage from '../pages/commoditiesPage';
import HomePage from '../pages/homePage';
import StocksPage from '../pages/stocksPage';

describe('Commodities functionality', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  const homePage = new HomePage();
  const stocksPage = new StocksPage();
  const commoditiesPage = new CommoditiesPage();

  it('Commodities page- Verify Go back and Fwd cypress functionality', () => {
    homePage.pageHasLoaded();
    homePage.navigateToStocksScreen();
    cy.go('back');
    homePage.pageHasLoaded();
    cy.go('forward');
    stocksPage.pageHasLoaded();
    cy.go('back');
    homePage.navigateToCommoditiesScreen();
    commoditiesPage.pageHasLoaded();
  });

  it('should() write & read from file and scroll into last trade item', () => {
    const commodityName = 'CL.JUL20';
    const commodityObj = {
      commodityName
    };

    cy.writeFile('files/commodities.txt', commodityName);
    cy.writeFile('files/commodities.json', commodityObj);
    cy.readFile('files/commodities.txt').should('eq', commodityName);
    cy.readFile('files/commodities.json').its('commodityName')
      .should('eq', commodityName);

    homePage.pageHasLoaded();
    homePage.navigateToCommoditiesScreen();
    commoditiesPage.pageHasLoaded();
    cy.get(commoditiesPage.marketModeMenu).click();

    cy.readFile('files/commodities.json').then(data => {
      cy.log('data retrieved from json', data.commodityName);

      cy.get(commoditiesPage.tradeItem).each($el => {
        if ($el.text() === data.commodityName) {
          cy.get($el).scrollIntoView();
        }
      });
    });
  });
});
