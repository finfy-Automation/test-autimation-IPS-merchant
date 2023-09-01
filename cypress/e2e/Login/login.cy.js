import Login from '../Pages/Login'
describe('Login', () => {
  it('T01 - Success - Given a user on the login screen, when the correct username and password are entered, then they should be redirected to the website home screen.', () => {
    Login.accessPage('auth')
    Login.enterInputData(Cypress.env('username'), Cypress.env('password'))
    Login.clickCheckBox()
    Login.clickButton()
    Login.successfulLogin()
  })
  it('T02 - Error - Given a user on the login screen, when an incorrect username or password is entered, then they should not be redirected to the websites home screen.', () => {
    Login.accessPage('auth')
    Login.enterInputData('teste@teste.com', 'teste123')
    Login.clickButton()
    Login.loginError()
  })
  it('T03 - Error Input - Given a user on the login screen, when no username or password is entered, then it should indicate that their completion is mandatory.', () => {
    Login.accessPage('auth')
    Login.clickButton()
    Login.inputError()
  })
  it('T04 - Authenticate Error - Given an unauthenticated user, when accessing a page that requires authentication, then they should be redirected to the login screen.', () => {
    Login.accessPage('dashboard')
    Login.authenticateError()
  })
})
