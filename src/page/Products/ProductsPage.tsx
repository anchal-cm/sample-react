import React from 'react'
import { AspectRatio } from '../../components/views/AspectRatio/AspectRatio'
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
    <GridColumn className={style.container}>
      <a href='/products/newProduct'>New Product</a>
      {products?.map((product: { id: number; title: string; thumbnail: string }) => (
        <a href={`/products/${product.id}`} key={product.id}>
          <AspectRatio>
            <div>
              {product.id} {product.title}
            </div>

            <img alt='' src={product.thumbnail} />
          </AspectRatio>
        </a>
      ))}
    </GridColumn>
  )
}

export default ProductsPage
