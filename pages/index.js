import Head from 'next/head'
import Header from '../components/Header/Header'

export default function Home() {
    return (
        <>
            <Head>
                <title></title>
            </Head>
            <div>
                <div>
                    <Header white={false} full={true} />
                </div>
                
            </div>
        </>
    )
}
