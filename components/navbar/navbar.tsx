import { useState } from 'react'
import Link from 'next/link'
import styles from './navbar.module.scss'

export default function Navbar() {
    interface LinkObject {
        name: string,
        route: string
    }

    const links: LinkObject[] = [
        { name: 'Services', route: '/services' },
        { name: 'Contact', route: '/contact' },
        { name: 'About me', route: '/about' },
        { name: 'Blog', route: '/blog' },
    ]

    const [mobileNavHeight, setMobileNavHeight] = useState<string>('-65px')

    const toggleMobileNavHeight = () => {
        if (mobileNavHeight === '-65px') {
            setMobileNavHeight('60px')
        } else {
            setMobileNavHeight('-65px')
        }
    }

    const linksJSX = (): JSX.Element => {

        return (
            <div className={styles.links}>
                {
                    links.map(link => (
                        <Link
                            key={link.name}
                            href={link.route}
                        >
                            <a>{link.name}</a>
                        </Link>
                    ))
                }
            </div>
        )
    }

    return (
        <>
            <nav className={styles.main}>
                <Link href='/'>
                    <a><b>Alfredo Medina</b></a>
                </Link>

                {linksJSX()}

                {/* Burger menu button */}
                <div
                    className={styles.burger}
                    onClick={() => toggleMobileNavHeight()}
                >
                    <svg viewBox="0 0 100 80" width="20" height="20">
                        <rect width="100" height="20" rx="8" fill="#333"></rect>
                        <rect y="30" width="100" height="20" rx="8" fill="#333"></rect>
                        <rect y="60" width="100" height="20" rx="8" fill="#333"></rect>
                    </svg>
                </div>
            </nav>

            <div
                className={styles.mobileLinks}
                style={{ top: mobileNavHeight }}
            >
                {linksJSX()}
            </div>
        </>
    )
}