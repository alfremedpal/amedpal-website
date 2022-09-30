import Link from 'next/link'
import styles from './button.module.scss'

type Props = {
    children: React.ReactNode,
    href: string
}

const Button = ({ children, href }: Props) => {
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