import { ProductRepository } from "../repository/ProductRepository";

export class ProductUsecase {
    static async fetchProductBy(productId: string) {
        return ProductRepository.fetchProductBy(productId)
    }

    static async postProduct(product:{title:string,description:string}) {
        return ProductRepository.postProduct(product)
    }
}


