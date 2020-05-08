import page from './page';

class CommoditiesPage extends page {
  constructor () {
    super();

    // Selector vars
    this.headerTextSelector = 'div.header-text';
    this.marketModeMenuSelector = 'div[automation-id="discover-market-mode-switch"]';
    this.tradeItemNameSelector = 'div[automation-id="trade-item-name"]';
  }

  get headerText () {
    return this.headerTextSelector;
  }

  get marketModeMenu () {
    return this.marketModeMenuSelector;
  }

  get tradeItem () {
    return this.tradeItemNameSelector;
  }

  pageHasLoaded () {
    cy.title().should('eq', 'Commodity trading and investing on eToro');
    super.pageHasLoaded(this.headerTextSelector);
    cy.get(this.headerText).should('contain', ' Commodities ');
  }
}

export default CommoditiesPage;
