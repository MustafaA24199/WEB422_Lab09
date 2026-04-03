describe("Calculator E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="btn-C"]').click();
  });

  it("Addition: 5 + 3 = 8", () => {
    cy.get('[data-cy="btn-5"]').click();
    cy.get('[data-cy="btn-+"]').click();
    cy.get('[data-cy="btn-3"]').click();
    cy.get('[data-cy="btn-="]').click();
    cy.get('[data-cy="display"]').should("have.value", "8");
  });

  it("Subtraction: 10 - 4 = 6", () => {
    cy.get('[data-cy="btn-1"]').click();
    cy.get('[data-cy="btn-0"]').click();
    cy.get('[data-cy="btn--"]').click();
    cy.get('[data-cy="btn-4"]').click();
    cy.get('[data-cy="btn-="]').click();
    cy.get('[data-cy="display"]').should("have.value", "6");
  });

  it("Multiplication: 6 * 7 = 42", () => {
    cy.get('[data-cy="btn-6"]').click();
    cy.get('[data-cy="btn-*"]').click();
    cy.get('[data-cy="btn-7"]').click();
    cy.get('[data-cy="btn-="]').click();
    cy.get('[data-cy="display"]').should("have.value", "42");
  });

  it("Division: 15 / 3 = 5", () => {
    cy.get('[data-cy="btn-1"]').click();
    cy.get('[data-cy="btn-5"]').click();
    cy.get('[data-cy="btn-/"]').click();
    cy.get('[data-cy="btn-3"]').click();
    cy.get('[data-cy="btn-="]').click();
    cy.get('[data-cy="display"]').should("have.value", "5");
  });
});