import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import AppTemplate from '../templates/AppTemplate'
import style from './AppLayout.module.css'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { sideNaviState } from '../../features/side-navi-atom'

export const AppLayout: FC = () => {
  const sideNavi = useRecoilValue(sideNaviState)

  return (
    <AppTemplate header={<Header />} footer={<div>footer</div>}>
      <div className={style.content}>
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
        <div>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </React.Suspense>
        </div>
      </div>
    </AppTemplate>
  )
}
