describe("Home", () => {
  it("should render a welcome message", () => {
    cy.visit("http://localhost:3000/");

    cy.get("h1").invoke("text").should("eq", "Welcome to my App");
  });
});
