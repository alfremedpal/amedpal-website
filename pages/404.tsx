import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/404.module.scss'

const NotFound: NextPage = () => {

    return (
        <div className={styles.main}>
            <h1>whoops</h1>
            <h2>page not found</h2>
            <p>
                If you believe this is a mistake&nbsp;
                <Link
                    href={"/contact"}
                >
                    <a>
                        contact me
                    </a>
                </Link>
            </p>
        </div>
    )
}

export default NotFound