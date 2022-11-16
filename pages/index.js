import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard prototype</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='p-6 width-full'>
        <h1 className='text-3xl text-center font-title'>Dashboard prototype</h1>
        <br/>
        <div className='text-center font-subtitle'>Simple NextJS app template, used with TailwindCSS, React Icon, GraphQL + Apollo Client</div>
        <br/>
        <div className='text-center'>
          Go to <Link href={'/demo'} className='font-semibold text-lime-400 hover:text-lime-200'>Demo page</Link>
        </div>
      </main>
    </div>
  )
}
