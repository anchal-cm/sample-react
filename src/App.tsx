import style from "./App.module.css"
import "./App.css"

function App() {

  return (
    <>

      <div className={style.content}>
        <div className={style.header}>

          Header

        </div>
        <div className={style.main}>
          Main
        </div>
        <div className={style.footer}>
          Footer
        </div>
      </div>

    </>
  )
}

export default App
