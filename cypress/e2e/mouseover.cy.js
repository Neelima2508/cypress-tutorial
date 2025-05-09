describe('Mouseover', ()=>{
    it('mouseover',()=>{
        cy.get('').trigger('mouseover').click();

        cy.get('').trigger('contextmenu') // Rightclick - approach1
        cy.get('').rightclick();// Rightclick - approach2
        
        cy.get('').trigger('dblclick'); // Doubleclick approach1
        cy.get('').dblclick(); // Doubleclick approach2

        cy.get('source element').drag('target element', {force:true}) // drag and drop
        cy.get('').scrollIntoView({duration:2000}) // scroll the page   
    })
})