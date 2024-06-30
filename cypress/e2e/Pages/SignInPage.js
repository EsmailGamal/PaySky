const userData = require ('../../fixtures/Login.json');
class SignInPage {
  // Locators
  elements = {
    emailInputField: () => cy.get('#Email'),
    passwordInputField: () => cy.get('#Password'),
    loginButton: () => cy.xpath("//button[@type='submit']"),
    loginIcon: () => cy.get('.ico-login')
  };

  // Methods

  introduceUserNameAndPassword(userType) {
    const credentials = userData.Login[userType];
    if (credentials) {
      this.elements.emailInputField().type(credentials.email);
      this.elements.passwordInputField().type(credentials.password);
      this.elements.loginButton().click( {multiple : true });
    } else {
      throw new Error(`No user found with username: ${userName}`);
    }
  }
  ensureUserNavigatedToHomeScreenAfterLogin() {
    cy.url().should('equal','https://demo.nopcommerce.com/')
  }
}

module.exports = new SignInPage();
