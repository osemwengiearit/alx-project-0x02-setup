import React from 'react';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';
import { PostProps, ApiPost } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage = ({ posts }: PostsPageProps) => {
  return (
    <div>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">📄 Posts</h1>
        {posts.map((post, idx) => (
          <PostCard
            key={idx}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );
  const data: ApiPost[] = await res.json();

  const posts: PostProps[] = data.map(post => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
