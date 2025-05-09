// cypress automatically close alert window, no need to give any methods

describe('alerts', ()=>{
    // 1. Javascript alert  : only have some tex with only ok button
    it('ok button', ()=>{

       cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
       cy.get('[onclick="jsAlert()"]').click();

       // To validate alert message trigger an event called window:alert from cypress
       cy.on('window:alert', (t)=>{
        expect(t).to.eq('I am a JS Alert');
       })
       cy.get('#result').should('contain', 'You successfully clicked an alert');
    })
    // 2. Javascript confirmation alert  : have some text with only ok and cancel button
    it('confirmation alert - ok button', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("[onclick='jsConfirm()']").click();
        //now the alert is window confirm, cypress automactically close the alert window with ok button
        cy.on('window:confirm', (t)=>{
            expect(t).to.contain('I am a JS Confirm');
        })
        cy.get('#result').should('contain', 'You clicked: Ok')
    })
    it('confirmation alert - cancel button', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("[onclick='jsConfirm()']").click();
        cy.on('window:confirm', (t)=>{
            expect(t).to.contain('I am a JS Confirm');
        })
        // closing the alert window with cancel button
        cy.on('window:confirm', ()=>false)
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })
    // 3. Javascript prompt alert - text with user input with ok button
    it('prompt alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        // before opening an window alert we are taking the control of the alert with cy.window
        // cy.stub specifies which alert type and returns write the text in alert input box
        cy.window().then((t)=>{
            cy.stub(t, 'prompt').returns('Welcome');
        })
        cy.get("[onclick='jsPrompt()']").click();
        cy.get('#result').should('have.text', 'You entered: Welcome');
    })
    // 4. Authenticated alert
    it('Authenticated alert - passing parameters through auth', ()=>{
        // we can pass username and password as parameters in url in json format
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{
            username: 'admin',
            password: 'admin'
        }
    })
        cy.get("[class='example']>p").should('contain', 'Congratulations! You must have the proper credentials')
       
    })
    it('Authenticated alert-giving values directly in url', ()=>{
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("[class='example']>p").should('contain', 'Congratulations! You must have the proper credentials')
    })
})