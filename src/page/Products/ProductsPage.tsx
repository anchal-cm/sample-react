import React from 'react'
import { useProducts } from './Products.hooks'

const ProductsPage: React.FC = () => {
  const { products } = useProducts()

  if (!products) {
    return null
  }

  return (
    <ul>
      <a href='/products/newProduct'>New Product</a>
      {products?.map((product: { id: number; title: string }) => (
        <a href={`/products/${product.id}`} key={product.id}>
          <li>
            {product.id} {product.title}
          </li>
        </a>
      ))}
    </ul>
  )
}

export default ProductsPage
