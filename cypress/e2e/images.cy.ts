describe("Image Feed with Real GraphQL API", () => {
  beforeEach(() => {
    cy.intercept("POST", Cypress.env("VITE_API_URL")).as("imageApi");
    cy.visit("/");
    cy.wait("@imageApi");
  });

  it("should load images from the API", () => {
    cy.get("[data-test='image-list']")
      .children()
      .should("have.length.greaterThan", 0);
  });

  it("should filter images by title", () => {
    cy.get('[data-test="title-filter"]').type("gone");
    cy.wait("@imageApi");
    cy.get("[data-test='image-list']").children().should("have.length", 1); // Only 1 image should match the title 'gone'
  });

  it("should reset the list by clicking in the logo", () => {
    cy.get('[data-test="title-filter"]').type("123");
    cy.wait("@imageApi");
    cy.get("[data-test='image-list']").children().should("have.length", 0);
    cy.get("header > img").click({ force: true });
    cy.wait("@imageApi");
    cy.get("[data-test='image-list']")
      .children()
      .should("have.length.greaterThan", 1);
  });

  it("should toggle like/dislike on an image", () => {
    cy.get('[data-test="like-container"]')
      .first()
      .then(($container) => {
        const isLiked = $container.find('[data-test="like"]').length > 0;
        cy.wrap($container).within(() => {
          cy.get('[data-test="like-button"]').click({ force: true });
          cy.wait("@imageApi");
          cy.get(
            isLiked ? '[data-test="like"]' : '[data-test="dislike"]'
          ).should("not.exist");
          cy.get(
            isLiked ? '[data-test="dislike"]' : '[data-test="like"]'
          ).should("exist");
        });
      });
  });

  it("should load more images on scroll", () => {
    cy.get("[data-test='image-list']")
      .children()
      .then(($initialChildren) => {
        const initialLength = $initialChildren.length;
        cy.scrollTo("bottom");
        cy.wait("@imageApi");
        cy.get("[data-test='image-list']")
          .children()
          .should("have.length.greaterThan", initialLength);
      });
  });
});
