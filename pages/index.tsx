import { useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Button from '../components/button/button'
import TechMarquee from '../components/techMarquee/techMarquee'

import { AiOutlineCloudServer, AiOutlineComment, AiOutlineCode } from 'react-icons/ai'

const Home: NextPage = () => {

	const [animationID, setAnimationID] = useState<string>(styles.showOff)

	const restartAnimation = () => {
		if (animationID === styles.showOff) {
			setAnimationID(styles.showOffRepeat)
		} else {
			setAnimationID(styles.showOff)
		}
	}

	return (
		<>
			<div className={styles.heroContainer}>
				<div className={styles.heroText}>
					<h1>Alfredo Medina</h1>
					<p onClick={() => restartAnimation()}>
						<span style={{ animationName: animationID }}>Solutions Architect</span>&nbsp;|&nbsp;
						<span style={{ animationName: animationID }}>Team builder</span>&nbsp;|&nbsp;
						<span style={{ animationName: animationID }}>Fullstack developer</span>
					</p>
					<Button
						href='/contact'
					>
						Let&apos;s talk
					</Button>
				</div>
			</div>

			<TechMarquee />

			<section className={styles.grayContainer}>
				<div>
					<h2>Services</h2>
					<p>
						From designing and implementing efficient <b>solutions on the cloud</b>, to consulting on
						<b> digital transformation</b> as a whole, and developing <b>production-ready</b> applications.
					</p>
					<div className={styles.serviceIcons}>
						<AiOutlineCloudServer />
						<AiOutlineComment />
						<AiOutlineCode />
					</div>
					<Button href='/services'>
						Details
					</Button>
				</div>
			</section>

			<section className={styles.whiteContainer}>
				<div>
					<h2>About me</h2>
					<p>
						I like to <b>grow</b> teams, <b>design</b> efficient solutions on the cloud,
						and <b>build</b> amazing products.
					</p>
					<p>
						With over 5 years of <b>professional development</b> experience, and 2 years of
						<b> leadership</b> and <b>project management</b> experience, I can help you build amazing things.
						I enjoy working with small and local businesses, I&apos;m a fan of everything open source,
						and I&apos;m a huge board game geek.
					</p>
					<Button href='/about'>
						Know me
					</Button>
				</div>
			</section>

			<section className={styles.grayContainer}>
				<div>
					<h2>Blog</h2>
					<p>
						Under construction
					</p>
				</div>
			</section>
		</>
	)
}

export default Home
