export class ProductRepository {
    static fetchProductBy(productId:string) {
        return fetch(`https://dummyjson.com/products/${productId}`).then((res) => res.json())

    }
}