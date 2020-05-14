const pages = ['https://etoro.com/login'];

const sizes = ['iphone-6', 'ipad-2', [1200, 800]];

describe('visual Regression check of loginpage', () => {
  sizes.forEach(size => {
    pages.forEach(page => {
      it(`should match ${page} in resolution of size ${size}`, () => {
        cy.setResolution(size);
        cy.visit(page);
        cy.matchImageSnapshot();

        // To get a Single Element Snapshot
        cy.get('div.login-form-logo').matchImageSnapshot();
        cy.percySnapshot();
      });
    });
  });
});
