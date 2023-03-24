import React from 'react'
import { useProduct } from './Product.hooks'
import style from './Product.module.css'

const ProductPage: React.FC = () => {
  const { product } = useProduct()

  return (
    <div className={style.container}>
      <h2>{product?.title}</h2>
      <p>Description : {product?.description}</p>
      <p>Price: {product?.price} ¥ </p>
      <img src={product?.thumbnail} alt='' />
    </div>
  )
}

export default ProductPage
