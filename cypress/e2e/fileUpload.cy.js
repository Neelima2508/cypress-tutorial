import 'cypress-file-upload'
describe('File upload',()=>{
    it('single file uplaod', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('Cypress setup.txt');
        // to rename the file, pass it through parameters
        cy.get('#file-upload').attachFile({filePath:'Cypress setup.txt', fileName:'sampletest.txt'});
        cy.get('#file-submit').click();

    })
    it('drag and drop method', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('Cypress setup.txt');

        cy.get('#drag-drop-upload').attachFile('Cypress setup.txt', {subjectType:'drag-n-drop'})
        cy.get('#file-submit').click();
    })
    it('multiple files', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile(['Cypress setup.txt', 'test2.txt']);
    })
    it.only('shadow dom', ()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('test2.txt');
        cy.wait(5000);
        cy.get('.smart-item-name', {includeShadowDom:true}).contains('test2.txt')
    })
})