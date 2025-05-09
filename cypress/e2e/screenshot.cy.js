describe('screenshots capture', ()=>{
    it('screenshots', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.screenshot("homepage");
        cy.wait(2000);
        cy.get('.example>h3').screenshot('alert message');
        // to automatically capture screenshot when test script fails run through terminal not the cypress
        // npx cypress run --spec ""
        cy.get('[onclick="jsAlert()"]').should('contain', 'messgae')

    })
})