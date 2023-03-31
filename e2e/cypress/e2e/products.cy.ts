/// <referene types="cypress"

import { ProductsPage } from "../src/ProductsPage";

context("Products page", () =>{
    it("test", () => {
        cy.visit("https://tanzania-370714.web.app/");
        const currentPage = new ProductsPage()
        currentPage.clickUsersSideNavi().clickProductsSideNavi().clickProductAt()

    })
})