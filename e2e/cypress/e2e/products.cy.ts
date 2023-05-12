/// <referene types="cypress"

import { ProductsPage } from "../src/ProductsPage";

context("Products page", () =>{
    it("test", () => {
        cy.login("A8ZwPSAiZkOcQ9E6ubsvQYTey2p2")
        cy.visit("https://tanzania-370714.web.app/");
        const currentPage = new ProductsPage()
        currentPage.clickUsersSideNavi().clickProductsSideNavi().clickProductAt()

    })
})