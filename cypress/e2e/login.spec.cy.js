
import userData from '../fixtures/userData.json'

describe('Login Tests', () => {
    
 // Objetos de Seletores e Credenciais 
  const selectorList = { 
    usernameField: "[name='username']", 
    passwordField: "[name='password']", 
    loginButton: "[type='submit']",
    wrongAlert: "[role='alert']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active", 
    dateField: ".oxd-date-input-icon",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
  }
  
  // Acessar a URl da Página a ser Testada
  beforeEach('Acessar a Página', () => {
    cy.visit('/auth/login')
  }) 

  it.only('Login - Sucess', () => {
    // Preenche Usuário e Senha Válido
    cy.get(selectorList.usernameField).clear().type(userData.userSucess.username)
    cy.get(selectorList.passwordField).clear().type(userData.userSucess.password)
    //Clica no botão de login
    cy.get(selectorList.loginButton).click()
    // Verifica se redirecionou corretamente para o dashboard
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)  
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).should('be.visible').clear().type('Victor')
    cy.get(selectorList.middleNameField).should('be.visible').clear().type('Henrique')
    cy.get(selectorList.lastNameField).should('be.visible').clear().type('Nadoti')
    cy.get(selectorList.genericField).eq(3).should('be.visible').clear().type('191410')
    cy.get(selectorList.genericField).eq(4).should('be.visible').clear().type('999111')
    cy.get(selectorList.genericField).eq(5).should('be.visible').clear().type('201599')
    // Acessar Calendario
    cy.get(selectorList.dateField).eq(0).should('be.visible').click()
    // Selecionar o Ano
    cy.get('.oxd-calendar-selector-year').should('be.visible').click()
    cy.get('.oxd-calendar-dropdown > *').last().click();
    // Selecionar o Mês
    cy.get('.oxd-calendar-selector-month-selected').should('be.visible').click()
    cy.get('.oxd-calendar-dropdown > *').last().click();
    // Selecionar o Dia
    cy.get('.oxd-calendar-date').should('be.visible').contains(/^20$/).click();
    cy.get(selectorList.dateCloseButton).should('be.visible').click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain','Successfully Updated')
  })

  it('Login Credenciais Erradas - Fail', () => {
    // Insere credenciais e submete o formulario
    cy.get(selectorList.usernameField).clear().type(userData.userFail.username)
    cy.get(selectorList.passwordField).clear().type(userData.userFail.password)
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
    cy.get(selectorList.usernameField).should('have.attr', 'placeholder', 'username');
    // Acessa o Input Password e verifica se o Placeholder é Password
    cy.get(selectorList.passwordField).should('have.attr', 'placeholder', 'password');
  })

  it('Login sem preencher usuário valido - Fail', () => { 
    // Insere credenciais e submete o formulario
    cy.get(selectorList.usernameField).clear().type(userData.userFail.username)
    cy.get(selectorList.passwordField).clear().type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    // Verifica se Aparece o Alerta de Erro
    cy.get(selectorList.wrongAlert)
  })
  
  it('Login sem preencher senha valida - Fail', () => { 
    // Insere credenciais e submete o formulario
    cy.get(selectorList.usernameField).clear().type(userData.userSucess.username)
    cy.get(selectorList.passwordField).clear().type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    // Verifica se Aparece o Alerta de Erro
    cy.get(selectorList.wrongAlert)
  }) 

}) 

