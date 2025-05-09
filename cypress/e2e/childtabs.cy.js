describe('handling child tabs',()=>{
    it('child tabs', ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        // we are removing target window to open the new window in same page
        cy.get('.example>a').invoke('removeAttr', 'target').click(); //clickig on link
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
        cy.wait(5000);
        cy.go('back') // go back to previous tab
        cy.go('forward') // redirect to previous window
    })
    it.only('approach2', ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        // storing the element in a variable and taking the href property and opening the url
        cy.get('.example>a').then((a)=>{
            let url = a.prop('href');
            cy.visit(url); // main domain should match
        })
    })
})