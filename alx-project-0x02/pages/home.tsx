import React from 'react';
import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-10 space-y-6">
        <h1 className="text-3xl font-bold mb-4">🏠 Home Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Welcome to Next.js"
            content="Build fast and modern websites with ease."
          />
          <Card
            title="Reusable Components"
            content="Create flexible components that scale with your project."
          />
          <Card
            title="TypeScript Support"
            content="Enjoy powerful type safety and autocomplete."
          />
        </div>
      </main>
    </>
  );
}
