import Head from 'next/head'

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/font.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return(
		<>
			<Head>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />	
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
