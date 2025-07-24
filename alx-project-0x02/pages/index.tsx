import Header from '@/components/layout/Header';

export default function Index() {
  return (
    <>
      <Header />
      <main className="p-10">
        <h1 className="text-3xl font-bold">🏡 Welcome to the Index Page</h1>
        <p>This is the landing page of our Next.js project.</p>
      </main>
    </>
  );
}
