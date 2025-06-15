describe('Login Tests', () => {
    
    const validUsername = 'Admin'
    const validPassword = 'admin123'
  
  // Acessar a URl da Página a ser Testada
  beforeEach('Acessar a Página', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('Login - Sucess', () => {
    // Preenche Usuário e Senha Válido
    cy.get('[name="username"]')
      .type(validUsername)
    cy.get('[name="password"]')
      .type(validPassword)
    //Clica no botão de login
    cy.get('[type="submit"]')
      .click()
    // Verifica se redirecionou corretamente para o dashboard
    cy.url()
      .should('include', '/dashboard')
    // Verifica se o Titulo da página é Dashboard
    cy.get('.oxd-topbar-header-breadcrumb-module')
      .contains('Dashboard')
  })
  
  it('Login Credenciais Erradas - Fail', () => {
    // Insere credenciais e submete o formulario
    cy.get('[name="username"]')
      .type("Admin123")
    cy.get('[name="password"]')
      .type("admin12345678")
    cy.get('[type="submit"]')
      .click()
    // Verifica se Aparece o Alerta de Erro
    cy.get('[role="alert"]')
  })
 
  it('Login sem preencher Inputs - Fail', () => {
    // Clica no botao Login
    cy.get('[type="submit"]')
      .click()
    // Verifica se Aparece o campo de "Required"
    cy.get(".oxd-input-field-error-message")
  })
  
  
  it('Placeholder nos Inputs - Sucess', () => {
    // Acessa o Input username e verifica se o Placeholder é Username
    cy.get('input[name="username"]')
      .should('have.attr', 'placeholder', 'Username');
    // Acessa o Input Password e verifica se o Placeholder é Password
    cy.get('input[name="password"]')
      .should('have.attr', 'placeholder', 'Password');
  })

  it('Login sem preencher usuário valido - Fail', () => { 
    // Insere credenciais e submete o formulario
    cy.get('input[name="username"]')
      .type('Admilson')
    cy.get('input[name="password"]')
      .type(validPassword)
    cy.get('[type="submit"]')
      .click()
    // Verifica se Aparece o Alerta de Erro
    cy.get('[role="alert"]')
  })
  
  it('Login sem preencher senha valida - Fail', () => { 
    // Insere credenciais e submete o formulario
    cy.get('input[name="username"]')
    .type(validUsername)
    cy.get('input[name="password"]')
    .type('errorpassword')
    cy.get('[type="submit"]')
    .click()
    // Verifica se Aparece o Alerta de Erro
    cy.get('[role="alert"]')
  }) 

}) 

