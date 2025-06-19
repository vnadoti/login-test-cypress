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
    loginPage.screenshotLogin()
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
    loginPage.screenshotLogin()
  })
  
  it('Login Usuário e Senha errados - Fail', () => { 
    loginPage.accessLoginPage()
    loginPage.loginCredentials(userData.userFail.username, userData.userFail.password)
    loginPage.wrongAlert()
    loginPage.screenshotLogin()
  })
  
  it('Login sem preencher Inputs - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithoutCredentials()
    loginPage.screenshotLogin()
  })
  
  it('Placeholder nos Inputs - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.placeholdersLogin()
    loginPage.screenshotLogin()
  })

}) 

