import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Navbar(){
    return ( 
      <div className={styles.navbar}>
            <div className={styles.ttitle}>
                <h2>
                    <Link href="/">
                        <a>devApp</a>
                    </Link>
                </h2>
            </div>
            <div className={styles.menu}>
                <ul className={styles.ul1}>
                    <h2>
                    <li>
                        <Link href="/posts/Projects">
                            <a>projects</a>
                        </Link>
                    </li>
                    </h2>
                    <li>
                        <h2>
                            <li>
                                <Link href="/posts/Blogs">
                                    <a>blogs</a>
                                </Link>
                            </li>
                        </h2>
                        </li>
                    <li>
                        <h2>
                            <li>
                                <Link href="/posts/Contact">
                                    <a>contact</a>
                                </Link>
                            </li>
                        </h2>
                    </li>
                </ul>
            </div>
      </div>
    )
}