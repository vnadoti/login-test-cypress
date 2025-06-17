class LoginPage { 

  selectorList(){ 
    const selectors = {
      usernameField: "[name='username']", 
      passwordField: "[name='password']", 
      loginButton: "[type='submit']",
      wrongAlert: "[role='alert']",
      inputFieldRequired: ".oxd-input-field-error-message",
    }

    return selectors
  }

  accessLoginPage() {
    cy.visit('/auth/login')
  }

  loginCredentials(username, password) { 
    cy.get(this.selectorList().usernameField).clear().type(username)
    cy.get(this.selectorList().passwordField).clear().type(password)
    cy.get(this.selectorList().loginButton).click()
  }

  loginWithoutCredentials() { 
    cy.get(this.selectorList().loginButton).click()
    cy.get(this.selectorList().inputFieldRequired)
  }

  placeholdersLogin() { 
    cy.get(this.selectorList().usernameField).should('have.attr', 'placeholder', 'username');
    cy.get(this.selectorList().passwordFieldField).should('have.attr', 'placeholder', 'password');
  }
  
  wrongAlert() {
    cy.get(this.selectorList().wrongAlert)
  }
  


}

export default LoginPage