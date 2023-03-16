import { RouterProvider } from 'react-router-dom'
import { appRouter } from './AppRouter'
import Header from './page/Header/Header'
import Footer from './page/Footer/Footer'
import style from './App.module.css'
import './App.css'

function App() {
  return (
    <>
      <div className={style.content}>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.main}>
          <RouterProvider router={appRouter} />
        </div>
        <div className={style.footer}>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
