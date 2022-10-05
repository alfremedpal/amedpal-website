import Image from "next/future/image"
import Marquee from "react-fast-marquee"
import styles from './techMarquee.module.scss'

import lambdaLogo from '../../public/svgs/aws-lambda.svg'
import awsLogo from '../../public/svgs/aws.svg'
import mongoLogo from '../../public/svgs/mongodb.svg'
import nextLogo from '../../public/svgs/next-js.svg'
import pythonLogo from '../../public/svgs/python.svg'
import reactLogo from '../../public/svgs/react.svg'
import postgresLogo from '../../public/svgs/postgresql.svg'
import dockerLogo from '../../public/svgs/docker.svg'
import gatewayLogo from '../../public/svgs/aws-api-gateway.svg'
import dynamoLogo from '../../public/svgs/aws-dynamodb.svg'
import nodeLogo from '../../public/svgs/nodejs.svg'

const TechMarquee = () => {

    interface ImagesObj {
        path: string,
        alt: string
    }

    const images: ImagesObj[] = [
        { path: awsLogo, alt: 'AWS' },
        { path: lambdaLogo, alt: 'Lambda' },
        { path: gatewayLogo, alt: 'API Gateway' },
        { path: dockerLogo, alt: 'Docker' },
        { path: mongoLogo, alt: 'MongoDB' },
        { path: postgresLogo, alt: 'PostgreSQL' },
        { path: dynamoLogo, alt: 'DynamoDB' },
        { path: nextLogo, alt: 'NextJS' },
        { path: reactLogo, alt: 'React' },
        { path: nodeLogo, alt: 'Node JS' },
        { path: pythonLogo, alt: 'Python' },
    ]

    return (
        <Marquee style={{ height: '75px' }} className={styles.marquee}>
            {
                images.map(image => (
                    <Image
                        key={image.alt}
                        src={image.path}
                        alt={image.alt}
                        height={50}
                        width={50}
                        className={styles.image}
                        priority={true}
                    />
                ))
            }
        </Marquee>
    )
}

export default TechMarquee