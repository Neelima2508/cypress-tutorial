import 'cypress-iframe'
describe('iframes', ()=>{
    it('sample iframe', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe');
        //cy.getIframe('#mce_0_ifr').clear().type('Welcome')
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('##mce_0_ifr').clear().type('Welcome')
    })
})