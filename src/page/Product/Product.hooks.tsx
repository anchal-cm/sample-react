import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { ProductUsecase } from '../../features/usecase/ProductUsecase'

type ProductParam = { productId: string }

export function useProduct() {
  const { productId } = useParams<ProductParam>()
  const { data } = useQuery({
    queryKey: ['ProductUsecase', 'fetchProductBy', productId],
    queryFn: () => ProductUsecase.fetchProductBy(productId as string),
  })

  const product = data
  return {
    product,
  }
}
