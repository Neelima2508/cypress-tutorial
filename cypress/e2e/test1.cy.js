import Login from "../pageObjects/loginPage.js";


describe('Login orange HRM', ()=>{
  let userdata
before(()=>{
  cy.fixture('orangeHrm').then((data)=>{
     userdata = data;
  })
})
  it('login', ()=>{
  
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const ln = new Login();
    ln.setuserName(userdata.userName)

 
  })
})