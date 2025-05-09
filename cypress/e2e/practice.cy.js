import Login from '../pageObjects/practice.js'
import "cypress-file-upload"

describe('prctice', ()=>{
   /* let userdata;
    before(()=>{
        cy.fixture('orangeHrm').then((data)=>{
            userdata =data;
        })
    })

    it('test1', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        let ln = new Login();
        ln.setUserName(userdata.userName)
        cy.screenshot();

    })
    it('file uplaod', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
       // cy.get('#file-upload').attachFile({filePath:'Cypress setup.txt', fileName: 'cypress.txt'})
        cy.get('#drag-drop-upload').attachFile('Cypress setup.txt', {subjectType :'drag-n-drop'})
    })*/
   it('alerts', ()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get('[onclick="jsAlert()"]').click();
    cy.on('window:alert', (t)=>{
      expect(t).to.eq("I am a JS Alert");
      
    })
    cy.get('[onclick="jsConfirm()"]').click()
    cy.on('window:confirm', ()=>false)
    cy.window().then((t)=>{
        cy.stub(t, 'prompt').returns('welcome')
    })
    cy.get('[onclick="jsPrompt()"]').click()
   })

})