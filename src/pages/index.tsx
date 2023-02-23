import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>AniCat</title>
        <meta name="description" content="AniCat - Anime data on demand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-semibold text-center mt-3">Welcome!</h1>
      <p className="text-lg text-center">Try clicking our nav links</p>
    </>
  )
}
