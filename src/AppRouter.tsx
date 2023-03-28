import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom'
import { AppLayout } from './components/layouts/AppLayout'
import { PrivateLayout } from './components/layouts/PrivateLayout'
import { NewProductPAge } from './page/NewProduct/NewProductPage'
import ProductPage from './page/Product/ProductPage'
import ProductsPage from './page/Products/ProductsPage'
import { UsersPage } from './page/UsersPage/UsersPage'

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<PrivateLayout />}>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to={'products'}></Navigate>} />
        <Route path='users'>
          <Route index element={<UsersPage />} />
        </Route>
        <Route path='products'>
          <Route index element={<ProductsPage />} />
          <Route path='newProduct' element={<NewProductPAge />} />
          <Route path=':productId' element={<ProductPage />}></Route>
        </Route>
      </Route>
    </Route>,
  ),
)
