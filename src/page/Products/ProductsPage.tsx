// import style from './Products.module.css'
import React from 'react'
import { useProducts } from './Products.hooks'

const ProductsPage: React.FC = () => {
  const { products, loading } = useProducts()

  return (
    <div>
      <div>
        {loading && <p>Loading...</p>}
        <ul>
          {products?.map((product) => (
            <a href={`/products/${product.id}`} key={product.id}>
              <li>
                {product.id} {product.title}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductsPage
