import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="My Next.js app with TypeScript and Tailwind" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold text-blue-600">
          Selamat Datang di Next.js + TypeScript + Tailwind
        </h1>
      </main>
    </>
  )
}
