class Login {
  accessPage(login) {
    cy.visit(login)
  }
  enterInputData(usernam, password) {
    cy.get('#email').type(usernam)
    cy.get('#password').type(password)
  }
  clickCheckBox() {
    cy.get('#remember').click()
  }
  clickButton() {
    cy.contains('Sign In').click()
  }
  successfulLogin() {
    cy.contains('Welcome to the dashboard')
    cy.location('pathname', {timeout: 5000}).should('not.eq', 'auth')
  }
  loginError() {
    cy.contains('Failed to authenticate user')
    cy.url().should('include', 'auth')
  }
  inputError() {
    cy.contains('Please input your E-mail!')
    cy.contains('Please input your password!')
  }
  authenticateError() {
    cy.contains('Backoffice Panel')
    cy.location('pathname', {timeout: 5000}).should('include', 'auth')
  }
}
export default new Login()
