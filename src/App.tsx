import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Home from './component/Home/Home'
import style from './App.module.css'
import './App.css'
import Main from './component/Main/Main'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className={style.content}>
          <div className={style.header}>
            <Header />
          </div>
          <div className={style.main}>
            <Routes>
              <Route path="/use-effect-hook" element={<Home />} />
              <Route path="/" element={<Main />} />
            </Routes>
          </div>
          <div className={style.footer} >
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
