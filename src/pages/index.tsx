import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>AnimeCat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-semibold text-center mt-3">Welcome!</h1>
      <p className="text-lg text-center">Try clicking our nav links</p>
    </>
  )
}
