
import userData from '../fixtures/userData.json'

describe('Login Tests', () => {
    
 // Objetos de Seletores e Credenciais 
  const selectorList = { 
    usernameField: "[name='username']", 
    passwordField: "[name='password']", 
    loginButton: "[type='submit']",
    wrongAlert: "[role='alert']",
    dashboardGrid: ".orangehrm-dashboard-grid",
  }
  
  // Acessar a URl da Página a ser Testada
  beforeEach('Acessar a Página', () => {
    cy.visit('/auth/login')
  }) 

  it('Login - Sucess', () => {
    // Preenche Usuário e Senha Válido
    cy.get(selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.passwordField).type(userData.userSucess.password)
    //Clica no botão de login
    cy.get(selectorList.loginButton).click()
    // Verifica se redirecionou corretamente para o dashboard
    cy.url().should('include', '/dashboard')
    // Verifica se o Titulo da página é Dashboard
    cy.get(selectorList.dashboardGrid)  
  })
  
  it('Login Credenciais Erradas - Fail', () => {
    // Insere credenciais e submete o formulario
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    // Verifica se Aparece o Alerta de Erro
    cy.get(selectorList.wrongAlert)
  })
 
  it('Login sem preencher Inputs - Fail', () => {
    // Clica no botao Login
    cy.get(selectorList.loginButton).click()
    // Verifica se Aparece o campo de "Required"
    cy.get(".oxd-input-field-error-message")
  })
  
  it('Placeholder nos Inputs - Sucess', () => {
    // Acessa o Input username e verifica se o Placeholder é Username
    cy.get(selectorList.usernameField).should('have.attr', 'placeholder', 'Username');
    // Acessa o Input Password e verifica se o Placeholder é Password
    cy.get(selectorList.passwordField).should('have.attr', 'placeholder', 'Password');
  })

  it('Login sem preencher usuário valido - Fail', () => { 
    // Insere credenciais e submete o formulario
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    // Verifica se Aparece o Alerta de Erro
    cy.get(selectorList.wrongAlert)
  })
  
  it('Login sem preencher senha valida - Fail', () => { 
    // Insere credenciais e submete o formulario
    cy.get(selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    // Verifica se Aparece o Alerta de Erro
    cy.get(selectorList.wrongAlert)
  }) 

}) 

