describe('To do list, Testing Homework', () => {
  it('should render the page tittles', () => {
    cy.visit('http://localhost:3000/');

    cy.get('h1').invoke('text').should('eq','To Do List');
    cy.get('h6').invoke('text').should('eq','Testing Homework');
  })
  it('should render a todo input', ()=>{
    cy.get('#inputAdd').should('be.visible')
  })
  it('should render a list of three to dos by default', ()=>{
    cy.get('ul li').should('have.length',3)
    cy.get('ul li').first().should('have.text', 'Prepare Breakfast')
  })
  it('can add todo items when the user types and then click the button', ()=>{
    const newItem = 'Go to work'
    cy.get('#inputAdd').type(newItem)
    cy.get('button').click()
    cy.get('ul li').should('have.length',4)
    cy.get('ul li').last().should('have.text', newItem)
  })
})