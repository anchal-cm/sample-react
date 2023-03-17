// import style from './Products.module.css'
import React from 'react'
import Header from '../../components/Header/Header'
import AppTemplate from '../../components/templates/AppTemplate'
import { useProducts } from './Products.hooks'

const ProductsPage: React.FC = () => {
  const { products } = useProducts()

  return (
    <AppTemplate loading={false} header={<Header />} footer={<div>Footer</div>}>
      <ul>
        {products?.map((product) => (
          <a href={`/products/${product.id}`} key={product.id}>
            <li>
              {product.id} {product.title}
            </li>
          </a>
        ))}
      </ul>
    </AppTemplate>
  )
}

export default ProductsPage
