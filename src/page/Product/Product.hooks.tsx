import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { sideNaviState } from '../../features/side-navi-atom'
import { ProductUsecase } from '../../features/usecase/ProductUsecase'

type ProductParam = { productId: string }

export function useProduct() {
  const { productId } = useParams<ProductParam>()
  const { data } = useQuery({
    queryKey: ['ProductUsecase', 'fetchProductBy', productId],
    queryFn: () => ProductUsecase.fetchProductBy(productId as string),
  })

  const setSideNavi = useSetRecoilState(sideNaviState)
  useEffect(() => {
    setSideNavi('PRODUCT')
  }, [setSideNavi])

  return {
    product: data,
  }
}
