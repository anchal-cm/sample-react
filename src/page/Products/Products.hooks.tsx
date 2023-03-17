import { useQuery } from '../../useQuery'

type Product = {
  id: number
  title: string
}

type ProductResponse = {
  products: Product[]
}

export function useProducts() {
  const res = useQuery<ProductResponse>('https://dummyjson.com/products')
  const products: Product[] = res.products

  return {
    products,
  }
}
