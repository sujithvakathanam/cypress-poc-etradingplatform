import page from './page';

// Static method implementation- TO DO: move to utilities
class CurrenciesPage extends page {
  // eslint-disable-next-line no-useless-constructor
  constructor () {
    super();
  }

  static headerTextValidation () {
    cy.get('div.header-text').first()
      .contains('Currencies');
    cy.get('div.header-text').first()
      .click();
  }
}

export default CurrenciesPage;
