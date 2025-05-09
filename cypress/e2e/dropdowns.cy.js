describe('Dropdowns', ()=>{
   /* it('dropdown', ()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html');
        cy.get('#zcf_address_country').select('Guyana')
    })
    it('dropdown input', ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
        cy.get('#select2-billing_country-container').click();
        cy.get('.select2-search__field').type('Ireland').type('{enter}');
    })
    it('dropdown static dta', ()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi Capitals').click();
    })*/
   it('dropdown dynamically', ()=>{
    cy.visit('https://www.google.com/');
    cy.get('[title="Search"]').type('cypress automation');
    cy.get('div.wM6W7d>span').each(($el, index, $ele)=>{
        if($el.text() == "cypress automation tutorial")
            {
        cy.wrap($el).click();
        }
    })
   })
})