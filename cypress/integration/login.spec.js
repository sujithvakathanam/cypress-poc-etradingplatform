import LoginPage from '../pages/loginPage';

context('Login Functionality', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  describe('Profile Assertions', () => {
    it.only('.should()- Login with valid credentials', () => {
      const login = new LoginPage();
      login.pageHasLoaded(login.txtboxUserName);
      login.loginAsUser('mammachetorro@gmail.com', 'Goalburn');

      // eslint-disable-next-line no-warning-comments
      // ToDO: Check how cypress throws exception
      try {
        cy.get('a.i-menu-user-username pointer').should('be.visible');
        cy.get('a[automation-id = "menu-user-page-link"]').contains('mammachetorro');
      } catch (e) {
        cy.get('div[automation-id = "login-sts-error-password-or-username"]').should('be.visible');
        cy.get('div[automation-id = "login-sts-error-password-or-username"]').contains('An error has occurred, please try again');
        cy.screenshot({capture : 'fullPage'});
        cy.get('div[automation-id = "login-sts-error-password-or-username"]').screenshot();
      }

      /*
       * Below code to understand xpath location of elements in cypress
       * try {
       * Cy.xpath('//a[text()="mammachetorro"]').should('be.visible');
       * Cy.xpath('//a[text()="mammachetorro"]')
       *  .should('equal', 'mammachetorro');
       * } catch (e) {
       * Cy.log('Inside the catch statement');
       * Cy.get('div[automation-id = "login-sts-error-password-or-username"]').should('eq', 'An error has occurred, please try again');
       * }
       */
    });

    it('.should() - Login with Custom Commands ', () => {
      cy.login('mammachetorro@gmail.com', 'Goalburn');
    });
  });
});
