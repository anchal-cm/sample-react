import { useQuery } from '@tanstack/react-query'
import { ProductsUsecase } from '../../features/usecase/ProductsUsecase'
import { useSetRecoilState } from 'recoil'
import { sideNaviState } from '../../features/side-navi-atom'
import { useEffect } from 'react'

export function useProducts() {
  const { data } = useQuery({
    queryKey: ['ProductsUsecase', 'fetchProducts'],
    queryFn: ProductsUsecase.fetchProducts,
  })

  const setSideNavi = useSetRecoilState(sideNaviState)
  useEffect(() => {
    setSideNavi('PRODUCT')
  }, [setSideNavi])

  return {
    products: data?.products ?? [],
  }
}
