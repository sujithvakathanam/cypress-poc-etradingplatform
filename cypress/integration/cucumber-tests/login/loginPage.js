// /<reference types = "cypress" />
import page from '../page';

class LoginPage extends page {
  constructor () {
    super();

    // Selector vars
    this.usernameSelector = 'input[name = "username"]';
    this.passwordSelector = '#password';
    this.staySignedInCheckboxSelector = 'input[type="checkbox"]';
    this.signInButtonSelector = 'button[automation-id="login-sts-btn-sign-in"]';
    this.invalidUsernamepwdMessageSelector = 'div[automation-id="login-sts-error-password-or-username]';
  }

  get txtboxUserName () {
    return this.usernameSelector;
  }

  get txtboxPassword () {
    return this.passwordSelector;
  }

  get checkBoxStaySigned () {
    return this.staySignedInCheckboxSelector;
  }

  get btnSignIn () {
    return this.signInButtonSelector;
  }

  get invalidUsernamepwdMessage () {
    return this.invalidUsernamepwdMessageSelector;
  }

  setUserName (userName) {
    cy.get(this.txtboxUserName).type(userName);
    cy.log(`Set userName field to ${userName}`);
  }

  setPassword (password) {
    cy.get(this.txtboxPassword).type(password);
    cy.log('Set password text field');
  }

  uncheckStaySignedInCheckbox () {
    cy.get(this.checkBoxStaySigned).check({force : true})
      .should('be.checked');
    cy.log('StaySigned in checkbox is already checked');

    cy.get(this.checkBoxStaySigned).uncheck()
      .should('not.be.checked');
    cy.log('StaySigned in checkbox is now un-checked');
  }

  clickSignInButton () {
    cy.get(this.btnSignIn).click();
    cy.log('Clicked Sign in button');
  }

  loginAsUser (username, password) {
    this.setUserName(username);
    this.setPassword(password);
    this.uncheckStaySignedInCheckbox();
    this.clickSignInButton();
  }

  ShouldShowErrorMessage () {
    // cy.get(this.invalidUsernamepwdMessage, {timeout : 10000}).should('be.visible');
    cy.get(this.invalidUsernamepwdMessage, {timeout : 10000}).contains('An error has occurred, please try again');
  }
}

export default LoginPage;
