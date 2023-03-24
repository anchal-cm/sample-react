import { FC, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { sideNaviState } from '../../features/side-navi-atom'

export const UsersPage: FC = () => {
  const setSideNavi = useSetRecoilState(sideNaviState)
  useEffect(() => {
    setSideNavi('USER')
  }, [setSideNavi])
  return <div>Users page</div>
}
