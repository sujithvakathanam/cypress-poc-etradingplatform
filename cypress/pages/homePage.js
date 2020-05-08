import page from './page';

class HomePage extends page {
  constructor () {
    super();

    // Selector vars
    this.tradingSelector = 'a#custom_temp_id_1';
    this.topMarketsSelector = '#custom_temp_id_9';
    this.stocksdropDownSelector = 'a[id = "custom_temp_id_11"]';
    this.commoditiesDropDownSelector = 'a[id = "custom_temp_id_12"]';
    this.dropdownCurrencies = 'a[id = "custom_temp_id_13"]';
  }

  get menuTrading () {
    return this.tradingSelector;
  }

  get menuTopMarket () {
    return this.topMarketsSelector;
  }

  get dropdownStocks () {
    return this.stocksdropDownSelector;
  }

  get dropdownCommodities () {
    return this.commoditiesDropDownSelector;
  }

  pageHasLoaded () {
    cy.title().should('eq', 'eToro - The World’s Leading Social Trading and Investing Platform');

    return super.pageHasLoaded(this.menuTrading);
  }

  navigateToStocksScreen () {
    cy.get(this.menuTopMarket).click();
    cy.get(this.dropdownStocks).click({force : true});
  }

  navigateToCommoditiesScreen () {
    cy.get(this.menuTopMarket).click();
    cy.get(this.dropdownCommodities).contains('Commodities')
      .click({force : true});
  }

  navigateToCurrenciesScreen () {
    cy.get(this.menuTopMarket).click();
    cy.get(this.dropdownCurrencies).contains('Currencies')
      .click({force : true});
  }
}

export default HomePage;
