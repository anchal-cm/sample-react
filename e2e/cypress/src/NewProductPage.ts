export class NewProductPage {
    addNewProduct() {
        cy.get('#input-title').type("Sandalwood soap")
        cy.wait(2000)
        cy.get('#input-desc').type("Sandalwood soap is made of sandal wood with great fragrance.")
        cy.wait(2000)
        cy.get("button").click()
    }
}