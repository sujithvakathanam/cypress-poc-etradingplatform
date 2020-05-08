// /<reference types = "cypress" />

import HomePage from '../pages/homePage';
import StocksPage from '../pages/stocksPage';
import InstrumentPage from '../pages/instrumentPage';

describe('Stocks Functionality', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  const homePage = new HomePage();
  const stocksPage = new StocksPage();
  const instrumentPage = new InstrumentPage();

  it('stock validation', () => {
    cy.fixture('stocks').then(data => {
      const stock = data.stock;
      homePage.pageHasLoaded();
      homePage.navigateToStocksScreen();
      stocksPage.pageHasLoaded();
      stocksPage.marketSearch(stock);

      // Retrieve the price using closure
      cy.get(instrumentPage.marketHeadStatsValue).then($span => {
        const price = $span.text();
        cy.log(`Price retrieved for ${stock} is ${price}`);
      });

      // Retrieve the price using alias
      cy.get(instrumentPage.marketHeadStatsValue).as('price');

      // Cy.get('@price').should('contain', 121.68);

      /*
       * Retrieve the price using invoke
       * cy.get(instrumentPage.marketHeadStatsValue).invoke('text').should('contain', 121.68);
       */

      // Using Composite Selector and Closure
      cy.get(instrumentPage.headBreadCrumbs).last()
        .then($span => {
          cy.log('Stock retrieved is', $span.text());
          expect($span.text()).to.contain(`${stock.toUpperCase()} (CFD)`);
        });

      // Using jquery 'each' to iterate over list of elements and grabbing an item with 'eq'
      cy.get(instrumentPage.crumbItems).each(($el, index, $list) => {
        const text = $el.text();
        cy.log('text from crumbs is', text);

        if (text.includes(`${stock.toUpperCase()} (CFD)`)) {
          cy.get(instrumentPage.crumbItems).eq(index)
            .then(item => {
              expect(item.text()).to.equal(`${stock.toUpperCase()} (CFD)`);
            });
        }
      });
    });
  });

  it.only('trade validation', () => {
    const stock = 'ibm';
    homePage.pageHasLoaded();
    homePage.navigateToStocksScreen();
    stocksPage.pageHasLoaded();
    stocksPage.marketSearch(stock);
    instrumentPage.pageHasLoaded(instrumentPage.headBreadCrumbs);
    cy.get(instrumentPage.tradeBtn).click();
    cy.get(instrumentPage.closeBtn).click();
  });
});
