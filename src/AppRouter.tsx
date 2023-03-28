import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom'
import ProductsPage from './page/Products/ProductsPage'
import ProductPage from './page/Product/ProductPage'
import { UsersPage } from './page/UsersPage/UsersPage'
import { AppLayout } from './components/layouts/AppLayout'
import { NewProductPAge } from './page/NewProduct/NewProductPage'
import { LoginPage } from './page/Login/LoginPage'

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route path='login' element={<LoginPage />} />
      <Route index element={<Navigate to={'products'}></Navigate>} />
      <Route path='users'>
        <Route index element={<UsersPage />} />
      </Route>
      <Route path='products'>
        <Route index element={<ProductsPage />} />
        <Route path='newProduct' element={<NewProductPAge />} />
        <Route path=':productId' element={<ProductPage />}></Route>
      </Route>
    </Route>,
  ),
)
