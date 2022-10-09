import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.main}>
            <a
                href="mailto:info@amedpal.com"
                target="_blank"
                rel="noreferrer"
            >
                <AiOutlineMail />
            </a>
            <a
                href="https://github.com/alfremedpal/"
                target="_blank"
                rel="noreferrer"
            >
                <AiOutlineGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/alfredo-medina-874749121/"
                target="_blank"
                rel="noreferrer"
            >
                <AiOutlineLinkedin />
            </a>
        </footer>
    )
}

export default Footer