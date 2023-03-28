import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { LoginPage } from './page/Login/LoginPage'

export const PublicRoutes = () => {
  return createBrowserRouter(createRoutesFromElements(<Route element={<LoginPage />} />))
}
