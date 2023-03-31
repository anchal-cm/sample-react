import { ProductsPage } from "./ProductsPage";

export class UsersPage {

        clickProductsSideNavi() {
            cy.get("a[href='/products']").click()
            return new ProductsPage;
        }
        clickUsersSideNavi() {
            cy.get("a[href='/users'/").click()
            return this
        }
    
    
}