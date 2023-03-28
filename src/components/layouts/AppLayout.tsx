import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import AppTemplate from '../templates/AppTemplate'
import style from './AppLayout.module.css'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { sideNaviState } from '../../features/atoms/side-navi-atom'
import { Flex } from '../views/Flex/Flex'

export const AppLayout: FC = () => {
  const sideNavi = useRecoilValue(sideNaviState)

  return (
    <AppTemplate header={<Header />} footer={<div>footer</div>}>
      <Flex className={`${style.focus_navi_item} ${style.content}`}>
        <nav className={style.side_navi}>
          <a
            className={sideNavi === 'PRODUCT' ? style.focus_navi_item : undefined}
            href='/products'
          >
            Products
          </a>
          <a className={sideNavi === 'USER' ? style.focus_navi_item : undefined} href='/users'>
            Users
          </a>
        </nav>

        <React.Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </React.Suspense>
      </Flex>
    </AppTemplate>
  )
}
