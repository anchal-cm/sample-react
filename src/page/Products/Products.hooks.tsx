import { useState, useEffect } from 'react'

type Product = {
  id: number
  title: string
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((result) => {
        return result
      })
      .then((data) => {
        setProducts(data.products), setLoading(false)
      })
  }, [])

  return {
    products,
    loading,
  }
}
