import React from 'react'
import Header from '../../components/Header/Header'
import AppTemplate from '../../components/templates/AppTemplate'
import { useProduct } from './Product.hooks'
import style from './Product.module.css'

const ProductPage: React.FC = () => {
  const { product } = useProduct()

  return (
    <AppTemplate loading={false} header={<Header />} footer={<div>Footer</div>}>
      <div className={style.container}>
        <h2>{product?.title}</h2>
        <p>Description : {product?.description}</p>
        <p>Price: {product?.price} ¥ </p>
        <img src={product?.thumbnail} alt='' />
      </div>
    </AppTemplate>
  )
}

export default ProductPage
