
import userData from '../fixtures/userData.json'
import userForm from '../fixtures/userForm.json'
import LoginPage from '../pages/loginPage.js'
import NavBar from '../pages/navBar.js'
import DashboardPage from '../pages/dashboardPage.js'
import ProfilePage from '../pages/profilePage.js'

const loginPage = new LoginPage()
const navBar = new NavBar()
const dashboardPage = new DashboardPage()
const profilePage = new ProfilePage()

describe('Login Tests', () => {
    
  it('Login Usuário e Senha Correto - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginCredentials(userData.userSucess.username, userData.userSucess.password)
  })
  
  it('E2E Update User - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginCredentials(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.dashboardVerification()
    navBar.goProfile()
    profilePage.personalForm(userForm.personalForm.firstName, userForm.personalForm.middleName, userForm.personalForm.lastName)
    profilePage.datesPicker()
    profilePage.inputs()
    profilePage.boxRadio()
    profilePage.typeBlood()
    profilePage.saveProfile()
  })
  
  it('Login Usuário e Senha errados - Fail', () => { 
    loginPage.accessLoginPage()
    loginPage.loginCredentials(userData.userFail.username, userData.userFail.password)
    loginPage.wrongAlert()
  })
 
  it('Login sem preencher Inputs - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithoutCredentials()
  })
  
  it('Placeholder nos Inputs - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.placeholdersLogin()
  })

  // it('Login sem preencher usuário valido - Fail', () => { 
  //   // Insere credenciais e submete o formulario
  //   cy.get(selectorList.usernameField).clear().type(userData.userFail.username)
  //   cy.get(selectorList.passwordField).clear().type(userData.userSucess.password)
  //   cy.get(selectorList.loginButton).click()
  //   // Verifica se Aparece o Alerta de Erro
  //   cy.get(selectorList.wrongAlert)
  // })
  
  // it('Login sem preencher senha valida - Fail', () => { 
  //   // Insere credenciais e submete o formulario
  //   cy.get(selectorList.usernameField).clear().type(userData.userSucess.username)
  //   cy.get(selectorList.passwordField).clear().type(userData.userFail.password)
  //   cy.get(selectorList.loginButton).click()
  //   // Verifica se Aparece o Alerta de Erro
  //   cy.get(selectorList.wrongAlert)
  // }) 

}) 

