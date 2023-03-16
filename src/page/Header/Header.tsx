// import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
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
        <div>Profile</div>
      </div>
    </div>
  )
}

export default Header
