import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard prototype</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='p-6 width-full'>
        <h1 className='text-3xl text-center font-title'>Dashboard prototype</h1>
        <br />
        <div className='text-center font-subtitle'>
          Simple NextJS app template, used with TailwindCSS, React Icon, GraphQL
          + Apollo Client
        </div>
        <br />
        <div className='text-center'>
          Current pages in development:
          <div>
            <Link
              href={'/demo'}
              className='font-semibold text-darkColor-500 dark:text-lightColor-500 hover:text-darkColor-300 dark:hover:text-lightColor-300'
            >
              Demo page
            </Link>
          </div>
          <div>
            <Link
              href={'/login'}
              className='font-semibold text-darkColor-500 dark:text-lightColor-500 hover:text-darkColor-300 dark:hover:text-lightColor-300'
            >
              Login page
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
