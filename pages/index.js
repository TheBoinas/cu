import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body bgcolor="black">
    
    </body>
      <main bgcolor="black">
        <Header title="YEAH BOBINHO" />
        <p className="description">
          YIIPIE <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
