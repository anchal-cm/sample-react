import { ProductRepository } from "../repository/ProductRepository";

export class ProductUsecase {
    static async fetchProductBy(productId: string) {
        return ProductRepository.fetchProductBy(productId)
    }
}