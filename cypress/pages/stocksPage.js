import page from './page';

class StocksPage extends page {
  constructor () {
    super();

    // Selector vars
    this.marketsPeopleSearchSelector = 'input[placeholder="Markets / People search"]';
    this.autoCompleteSelector = 'div.autocomplete-ph';
  }

  get txtboxMarketsPeopleSearch () {
    return this.marketsPeopleSearchSelector;
  }

  get srchBoxAutoComplete () {
    return this.autoCompleteSelector;
  }

  pageHasLoaded () {
    cy.title().should('eq', 'Stock Trading and Investing on eToro (0% commission)');

    return super.pageHasLoaded(this.txtboxMarketsPeopleSearch);
  }

  marketSearch (stock) {
    cy.get(this.txtboxMarketsPeopleSearch, {timeout : 10000}).type(`${stock}`);
    cy.get(this.txtboxMarketsPeopleSearch, {timeout : 10000}).type('{enter}');

    cy.get(this.srchBoxAutoComplete, {timeout : 10000}).within(() => {
      cy.root().contains(stock.toUpperCase(), {matchCase : true})
        .click();
    });

    cy.url().should('eq', `https://www.etoro.com/markets/${stock}`);
    cy.url().should('contain', `markets/${stock}`);
    cy.url().should('eq', `${Cypress.config().baseUrl}/markets/${stock}`);
  }
}

export default StocksPage;
