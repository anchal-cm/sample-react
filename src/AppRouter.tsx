import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import ProductsPage from './page/Products/ProductsPage'
import ProductPage from './page/Product/ProductPage'

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<ProductsPage />} />
      <Route path='products'>
        <Route path=':productid' element={<ProductPage />}></Route>
      </Route>
    </Route>,
  ),
)
