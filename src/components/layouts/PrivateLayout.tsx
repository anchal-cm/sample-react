import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../../features/atoms/auth.hooks'
import { LoginPage } from '../../page/Login/LoginPage'

export const PrivateLayout: FC = () => {
  const { auth } = useAuth()
  console.log(auth)
  return auth.type === 'Logined' ? <Outlet /> : <LoginPage />
}
