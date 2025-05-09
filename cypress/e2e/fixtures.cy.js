describe('fixtures', ()=>{
    
    it('fixtures- approach1', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('orangeHrm').then((data)=>{
            cy.get('[name="username"]').type(data.userName);
            cy.get('[name="password"]').type(data.password);
            cy.get('[type="submit"]').click()
            cy.wait(5000)
            cy.get('.oxd-userdropdown-name').should('contain', data.expected);
        })

    })
    let userdata;
    before(()=>{
        cy.fixture('orangeHrm').then((data)=>{
            userdata = data; 
        })
    })
    it('fixtures- approach2', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.get('[name="username"]').type(userdata.userName);
            cy.get('[name="password"]').type(userdata.password);
            cy.get('[type="submit"]').click()
            cy.wait(5000)
            cy.get('.oxd-userdropdown-name').should('contain', userdata.expected);
     })
})