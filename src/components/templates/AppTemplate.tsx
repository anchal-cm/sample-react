import React, { PropsWithChildren } from 'react'
import style from './AppTemplate.module.css'

type AppTemplateProps = {
  loading: boolean
  footer: React.ReactNode
  header: React.ReactNode
  children: React.ReactNode
}

const AppTemplate: React.FC<PropsWithChildren<AppTemplateProps>> = ({
  header,
  footer,
  children,
  loading,
}) => {
  return (
    <div className={style.content}>
      <header className={style.header}>{header}</header>
      <main className={style.main}>{loading && <p>Loading...</p>}</main>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>{footer}</footer>
    </div>
  )
}

export default AppTemplate
