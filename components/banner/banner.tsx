import styles from './banner.module.scss'

interface Props {
    children: string,
    type?: string
}

interface Colors {
    info: string,
    warning: string,
    critical: string
}

const Banner = ({ children, type = 'info' }: Props) => {

    const getBannerColor: Colors = {
        info: styles.info,
        warning: styles.warning,
        critical: styles.critical
    }

    const typeKey = type as keyof typeof getBannerColor

    return (
        <div
            className={`${styles.main} ${getBannerColor[typeKey]}`}
        >
            {children}
        </div>
    )
}

export default Banner