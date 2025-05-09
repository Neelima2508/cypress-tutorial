class Login{
    usernametxt = '[name="username"]'
    setUserName(username)
    {
        cy.get(this.usernametxt).type(username)
    }
}
export default Login;