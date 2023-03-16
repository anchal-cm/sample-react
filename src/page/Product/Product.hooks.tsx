import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

type Product = {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
}

export function useProduct() {
  const [product, setProduct] = useState<Product>()
  const [loading, setLoading] = useState(true)
  const { productid } = useParams()

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productid}`)
      .then((res) => res.json())
      .then((result) => {
        return result
      })
      .then((data) => {
        setProduct(data), setLoading(false)
      })
  }, [])

  return {
    product,
    loading,
  }
}
