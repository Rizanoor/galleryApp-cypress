describe("Login Page Test Cases", () => {
  it('Visit Login Page', () => {
    cy.visit("http://localhost:3000")
    cy.title().should("eq", "React Gallery")
    cy.contains('Hello Again')
  })
})
