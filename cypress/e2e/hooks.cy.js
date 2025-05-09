
describe('template spec', () => {
  before(()=>{
    cy.log('test before - only runs only once before the it blocks');
  })
  after(()=>{
    cy.log('test only once after all the it blocks');
  })
  beforeEach(()=>{
    cy.log('runs everytime before for each it block');
  })
  afterEach(()=>{
    cy.log('runs everytime after for each it block');
  })
  it('passes', () => {
    cy.visit('https://example.cypress.io');
  })
  it('passes', () => {
    cy.visit('https://example.cypress.io');
  })
  it('passes', () => {
    cy.visit('https://example.cypress.io');
  })
})