import { NewProductPage } from "./NewProductPage";
import { ProductPage } from "./ProductPage";
import { UsersPage } from "./UsersPage";

export class ProductsPage {
    clickProductsSideNavi() {
        cy.get("a[href='/products']").click()
        return this;
    }

    clickProductAt() {
        return new ProductPage().clickProductAt()
    }


    clickUsersSideNavi() {
        cy.get("a[href='/users']").click()
        return new UsersPage
    }

    clickNewProduct() {
        cy.get("a[href='/products/newProduct']").click()
        return new NewProductPage
    }

}