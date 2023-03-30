import React from 'react'
import { AspectRatio } from '../../components/views/AspectRatio/AspectRatio'
import { StackHorizontal } from '../../components/views/StackHorizontal/StackHorizonta'
import { useProducts } from './Products.hooks'
import style from './Products.module.css'

const ProductsPage: React.FC = () => {
  const { products } = useProducts()

  if (!products) {
    return null
  }

  return (
    <div>
      <StackHorizontal className={style.container}>
        <div>
          <a href='/products/newProduct'>New Product</a>
        </div>
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
      </StackHorizontal>
    </div>
  )
}

export default ProductsPage
