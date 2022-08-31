describe("About", () => {
  it("should render this is a could page", () => {
    cy.visit("http://localhost:3000/");

    cy.get("a[data-testid='about-link']").click();

    cy.get("p[data-testid='about-message']")
      .invoke("text")
      .should("eq", "This is my cool page");
  });
});
