
export class ProductsRepository {
   static fetchProducts() {
        return fetch("api/products")
        .then((res) => res.json())
        
    }
}