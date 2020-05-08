class Page {
  constructor () {

  }

  pageHasLoaded (element) {
    return cy.get(element).then($el => {
      Cypress.dom.isVisible($el);
    });
  }
}

export default Page;
