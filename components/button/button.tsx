import Link from 'next/link'
import styles from './button.module.scss'

type Props = {
    children: React.ReactNode,
    href: string,
    isExternal?: Boolean
}

const Button = ({ children, href, isExternal = false }: Props) => {

    if (isExternal) {
        return (
            <a
                className={styles.main}
                target="_blank"
                rel="noreferrer"
                href={href}
            >
                {children}
            </a>
        )
    }

    return (
        <Link
            href={href}
        >
            <a
                className={styles.main}
            >
                {children}
            </a>
        </Link>
    )
}

export default Button