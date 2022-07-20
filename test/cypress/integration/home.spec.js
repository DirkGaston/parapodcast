/// <reference path="cypress" />
/// <reference path="../support/index.d.ts" />

// Use `cy.dataCy` custom command for more robust tests
// See https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements

describe("Parapodcast App", () => {
  it("login page can be opened", () => {
    cy.visit("http://localhost:8080/login");
    cy.contains("Identifícate");
  });

  it("user can log in", () => {
    cy.get("[placeholder='Email']").type("dirkgaston87@gmail.com");
    cy.get("[placeholder='Password']").type("test123");
    cy.contains("Continuar").click();
  });

  it("user can check user profile and return to home page", () => {
    cy.contains("Hola").click();
    cy.contains("Volver").click();
  });

  it("user can check episode info and mark as listened", () => {
    cy.get(".vueperslide").first().click();
    cy.contains("Marcar Escuchado").click();
    cy.contains("OK").click();
  });

  it("user can see episode reflected in his user profile", () => {
    cy.contains("Volver").click();
    cy.contains("Hola").click();
    cy.contains("Volver").click();
  });

  it("user can add an episode", () => {
    cy.visit("http://localhost:8080/admin");
    cy.get("button").eq(6).click({ force: true });
    cy.get("input").eq(0).type("1x09");
    cy.get("input").eq(1).type("Título del Episodio");
    cy.get("input").eq(2).type("Descripción del Episodio");
    cy.get("input").eq(3).type("URL de imágen de portada del episodio");
    cy.get("input").eq(4).type("URL con enlace de escucha del episodio");
    cy.get("input").eq(5).type("3");
    cy.contains("AGREGAR").click();
  });

  it("user can edit an episode", () => {
    cy.contains("chevron_right").click();
    cy.get(".editIcon").eq(3).click();
    cy.get("input").eq(1).clear().type("Título Modificado");
    cy.get("input").eq(2).clear().type("Descripción Modificada");
    cy.get("input").eq(3).clear().type("Nueva URL de imágen de portada");
    cy.get("input").eq(4).clear().type("Nueva URL con enlace de escucha");
    cy.get("input").eq(5).clear().type("3");
    cy.get("button").last().click();
  });

  it("user can delete an episode", () => {
    cy.contains("chevron_right").click();
    cy.get(".deleteIcon").eq(3).click();
    cy.contains("OK").click();
  });

  it("admin logs out", () => {
    cy.get(".logoutIcon").click();
  });

  it("login page can be opened", () => {
    cy.visit("http://localhost:8080/");
    cy.contains("Identifícate");
  });

  it("user can try to log in properly and reset form input", () => {
    cy.contains("Identifícate");
    cy.get("[placeholder='Email']").type("resting@test.com");
    cy.contains("Reset").click();
    cy.get("[placeholder='Email']").type("testing@test.com");
    cy.get("[placeholder='Password']").type("test123");
    cy.contains("Continuar").click();
    cy.contains("OK").click();
  });

  it("user can register an account after unregistered/incorrect login info alert", () => {
    cy.contains("Identifícate");
    cy.contains("crear").click();
    cy.get("[placeholder='Nombre']").type("Test");
    cy.get("[placeholder='Apellido']").type("Cypress");
    cy.get("[placeholder='Bio']").type(
      "Hola, soy un robot que ha venido a testear la web del Parapodcast"
    );
    cy.get("[placeholder='URL Foto']").type(
      "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/q1cwqhahz7jbtfzalznd"
    );
    cy.get("[placeholder='Email']").type("testing@test.com");
    cy.get("[placeholder='Contraseña']").type("test123");
    cy.get("input").last().type("test123");
    cy.contains("Crear Cuenta").click();
    cy.get("OK").click();
  });

  it("login page can be opened", () => {
    cy.visit("http://localhost:8080/login");
    cy.contains("Identifícate");
  });

  it("user can log in, check user profile and return to home page", () => {
    cy.get("[placeholder='Email']").type("testing@test.com");
    cy.get("[placeholder='Password']").type("test123");
    cy.contains("Continuar").click();
  });

  it("user can check episode info and mark as listened", () => {
    cy.get(".vueperslide").first().click();
    cy.contains("Marcar Escuchado").click();
    cy.contains("OK").click();
  });

  it("user can see episode reflected in his user profile", () => {
    cy.contains("Volver").click();
    cy.contains("Hola").click();
  });

  it("user can log out", () => {
    cy.get(".logoutIcon").click();
  });
});
