import Head from 'next/head'

import FullpageInformation from '../components/FullpageInformation'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yan Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FullpageInformation
        title="Webside in works"
        description="Come back later!"
      />
    </div>
  )
}
