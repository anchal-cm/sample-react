export class ProductPage {
    clickProductAt() {
       cy.get("li").eq(2).click()
    }
}