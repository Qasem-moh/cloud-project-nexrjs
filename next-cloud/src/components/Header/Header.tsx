import Link from 'next/link'
import { GrTechnology } from "react-icons/gr";
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div>
            <Link href="/" className={styles.logo}>
              CLOUD
              <GrTechnology />
              HOSTING
            </Link>
          </div>
          <ul className={styles.navLinks}>
            <Link className={styles.navLink} href="/">Home</Link>
            <Link className={styles.navLink} href="/articles">Articles</Link>
            <Link className={styles.navLink}  href="/about">About</Link>
            <Link className={styles.navLink}  href="/admin">Admin</Link>
          </ul>
        </nav>
        <div className={styles.right}>
          <Link className={styles.btn} href="/login">Login</Link>
          <Link className={styles.btn} href="/register">Register</Link>
        </div>
      </header>
    </div>
  )
}

export default Header