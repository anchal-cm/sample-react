import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {


    return <div className={styles.header} >
        <div className={styles.content}>
            <div><Link to="/use-effect-hook"><ul><li>UseEffect Hook</li></ul></Link>
            <Link to="/"><ul><li>Home</li></ul></Link>
            </div>
            <div className={styles.title}>Title</div>
            <div>Profile</div>
        </div>
    </div>
}

export default Header