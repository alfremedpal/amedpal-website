import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import styles from './layout.module.scss'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout