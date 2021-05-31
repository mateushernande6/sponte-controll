context("Register in page home", () => {
  it("register in home with valid values", () => {
    cy.visit("http://localhost:3000");

    cy.get(".sc-eCApnc").contains("CADASTRO DE PRODUTOS");

    cy.contains("Cadastrar");

    cy.get(".sc-gKAaRy > :nth-child(1) > input").type("Produto de teste");

    cy.contains("* Campo obrigatório");

    cy.get(".sc-gKAaRy > :nth-child(2) > input").type("12.50");

    cy.get(".sc-gKAaRy > :nth-child(3) > input").type("15 80 60");

    cy.contains("exemplo esperado 00/00/00");

    cy.get(".sc-gKAaRy > :nth-child(3) > input").clear();

    cy.get(".sc-gKAaRy > :nth-child(3) > input").type("15/80/60");

    cy.get(".sc-gKAaRy > :nth-child(4) > input").type("50");

    cy.get(".my-custom-input").type("Estre é um produto de teste com cypress");

    cy.get(".sc-iCoGMd > :nth-child(1) > input").type("teste");

    cy.get(".sc-iCoGMd > :nth-child(2) > input").type(
      "156454846545555565213321"
    );

    cy.get(".inputDate").type("2021-05-30");

    cy.get(".sc-iCoGMd > :nth-child(4) > input").type(
      "https://layers.education/assets/icons/erps/sponte.webp"
    );

    cy.get("button").click();

    cy.get(".sc-jrsJWt").click();

    cy.contains("ESTOQUE DE PRODUTOS");

    cy.get(".sc-crzoAE > :nth-child(6)").click();

    cy.contains("Atualizar");

    cy.contains("Deletar");

    cy.get(".btnUpdate").click();

    cy.contains("Fechar");

    cy.get(":nth-child(1) > input").type("Alterando nome do Produto");

    cy.get(".btnUpdate").click();

    cy.contains("Alterando nome do Produto");

    cy.get(".btnCloseDelete").click();

    cy.get(".btnCloseDelete").click();

    cy.contains("Alterando nome do Produto").should("not.exist");

    cy.get(".sc-jrsJWt").click();

    cy.contains("CADASTRO DE PRODUTOS");
  });
});
