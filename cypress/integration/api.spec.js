
describe('etoro -markets page functionality', () => {
  it('.should display markets page', () => {
    cy.request('https://www.etoro.com/discover/markets').as('markets');
    cy.get('@markets').its('headers')
      .its('content-type')
      .should('include', 'text/html; charset=utf-8');

    cy.get('@markets')
      .its('status')
      .should('equal', 200);

    cy.get('@markets')
      .its('body')
      .should('include', '674984916');
  });
});
