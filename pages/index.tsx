import { useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

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
		<div className={styles.hero}>
			<div
				className={styles.heroText}
				onClick={() => restartAnimation()}
			>
				<h1>Alfredo Medina</h1>
				<p>
					<span style={{animationName: animationID}}>Cloud Solutions Architect</span>&nbsp;|&nbsp;
					<span style={{animationName: animationID}}>Team builder</span>&nbsp;|&nbsp;
					<span style={{animationName: animationID}}>Fullstack developer</span>
				</p>
			</div>
			
		</div>
	)
}

export default Home
