describe("Sundial", () => {
  it("visits sundial.html", () => {
    cy.visit("./sundial.html");
  });
  it("should have a main header", () => {
    cy.get("h1").contains("Sundial");
  });
  it("should have 2 sub headers", () => {
    const subHeaders = cy.get("h2");
    subHeaders.should("have.length", 2);

    cy.get("h2").should((subs) => {
      expect(subs[0]).to.contain.text("History");
      expect(subs[1]).to.contain.text("Installation of standard sundials");
    });
  });

  it("should italicize 'free'", () => {
    cy.get("em").should("have.text", "free");
  });

  it("should bold text to match the requirements", () => {
    const bold = cy.get("strong");
    bold.should("have.length", 2);

    cy.get("strong").should((bolds) => {
      expect(bolds[0]).to.contain.text(
        "sundial measures time by the position of the sun"
      );
      expect(bolds[1]).to.contain.text("known from ancient Egypt");
    });
  });

  it("should have 6 paragraph tags", () => {
    const paragraphs = cy.get("p");
    paragraphs.should("have.length", 6);

    cy.get("p").should((p) => {
      expect(p[0]).to.contain.text("free");
    });
  });
});
