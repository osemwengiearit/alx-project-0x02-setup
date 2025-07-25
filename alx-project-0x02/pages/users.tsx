import React from 'react';
import { UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';

type ApiUser = {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
};

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">👥 Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const users: UserProps[] = data.map((user: ApiUser) => ({
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
};

export default UsersPage;
