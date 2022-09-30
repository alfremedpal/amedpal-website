import Link from 'next/link'
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.main}>
            <a
                href="mailto:info@amedpal.com"
                target="_blank"
                rel="noreferrer"
            >
                email
            </a>
            &nbsp;|&nbsp;
            <a
                href="https://github.com/alfremedpal/"
                target="_blank"
                rel="noreferrer"
            >
                github
            </a>
            &nbsp;|&nbsp;
            <a
                href="https://www.linkedin.com/in/alfredo-medina-874749121/"
                target="_blank"
                rel="noreferrer"
            >
                linkedin
            </a>
        </footer>
    )
}

export default Footer