// import { Link } from 'react-router-dom'
import Dialog from '../Dialog/Dialog'
import useDialog from '../Dialog/Dialog.hooks'
import styles from './Header.module.css'

function Header() {
  const { toggle, isOpen } = useDialog()

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div>
          <a href='/'>
            <ul>
              <li>Home </li>
            </ul>
          </a>
        </div>

        <div className={styles.title}>Title</div>
        <div>
          <button onClick={toggle}>Profile</button>
        </div>
      </div>
      <Dialog isOpen={isOpen} toggleDialog={toggle} />
    </div>
  )
}

export default Header
