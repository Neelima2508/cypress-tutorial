class Login {

    username = '[name="username"]';
    setuserName(userName)
    {
        cy.get(this.username).type(userName);
    }
}

export default Login;