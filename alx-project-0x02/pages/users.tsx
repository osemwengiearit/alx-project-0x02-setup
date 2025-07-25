import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

type ApiUser = {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
};

type UsersPageProps = {
  users: UserProps[];
};

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <div>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">👥 Users</h1>
        {users.map((user, idx) => (
          <UserCard
            key={idx}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: ApiUser[] = await res.json();

  const users: UserProps[] = data.map(user => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
    },
  }));

  return {
    props: {
      users,
    },
  };
}
