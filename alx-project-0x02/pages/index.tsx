import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 0x02</title>
      </Head>
      <Header />
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Welcome to ALX Project 0x02 🚀</h1>
      </main>
    </>
  );
}
