import React from 'react';
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';


export default function AboutPage() {
  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">ℹ️ About This Project</h1>
      <p>
        This is a basic Next.js project setup to demonstrate routing and
        reusable components.
      </p>

      <div className="flex gap-4 flex-wrap">
        <Button label="Small Rounded" size="small" shape="rounded-sm" />
        <Button label="Medium Rounded" size="medium" shape="rounded-md" />
        <Button label="Large Full" size="large" shape="rounded-full" />
      </div>
    </div>
  );
}

<>
  <Header />
  <main className="p-6">
    {/* Existing content here */}
  </main>
</>
