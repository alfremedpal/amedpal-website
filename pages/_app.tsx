import Head from 'next/head'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Alfredo Medina | Digital solutions</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
