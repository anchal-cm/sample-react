import React from 'react'
import { GridColumn } from '../../components/views/GridColumn/GridColumn'
import { StackHorizontal } from '../../components/views/StackHorizontal/StackHorizonta'
import { useProducts } from './Products.hooks'
import style from './Products.module.css'

const ProductsPage: React.FC = () => {
  const { products } = useProducts()

  if (!products) {
    return null
  }

  return (
    <StackHorizontal className={style.container}>
      <a href='/products/newProduct'>New Product</a>
      {products?.map((product: { id: number; title: string }) => (
        <a href={`/products/${product.id}`} key={product.id}>
          {product.id} {product.title}
        </a>
      ))}
    </StackHorizontal>
  )
}

export default ProductsPage
