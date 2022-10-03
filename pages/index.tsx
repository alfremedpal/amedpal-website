import { useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Button from '../components/button/button'
import TechMarquee from '../components/techMarquee/techMarquee'

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
		</>
	)
}

export default Home
