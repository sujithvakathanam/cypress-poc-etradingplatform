const page = 'https://etoro.com/login';

describe('visual Regression check of loginpage with Percy', () => {
  it(`should match ${page} `, () => {
    cy.visit(page);
    cy.percySnapshot();
  });
});
