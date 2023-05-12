export class ProductRepository {
    static async fetchProductBy(productId:string) {
        const res = await fetch(`https://dummyjson.com/products/${productId}`)
        return await res.json()

    }

    static  async postProduct(product:{title:string,description:string}) {
        const res = await fetch('api/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
        return await res.json()
    }
}


