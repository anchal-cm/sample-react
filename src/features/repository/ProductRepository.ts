export class ProductRepository {
    static fetchProductBy(productId:string) {
        return fetch(`https://dummyjson.com/products/${productId}`).then((res) => res.json())

    }

    static  postProduct(product:{title:string,description:string}) {
        return fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
          })
          .then(res => res.json())
    }
}


