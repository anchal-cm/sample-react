import style from './Products.module.css'
import React from 'react'
import Header from '../../components/Header/Header'
import AppTemplate from '../../components/templates/AppTemplate'
import { Product } from '../../features/entity/Product'
import { useProducts } from './Products.hooks'

const ProductsPage: React.FC = () => {
  const { products } = useProducts()

  if (!products) {
    return null
  }

  return (
    <ul>
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
