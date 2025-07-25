import React, { useEffect, useState } from 'react';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';
import { PostProps, ApiPost } from '@/interfaces'; // 👈 Fix #1

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      );
      const data = await res.json();

      const formatted = data.map(
        (post: ApiPost): PostProps => ({
          title: post.title,
          content: post.body, // JSONPlaceholder uses 'body'
          userId: post.userId,
        })
      );

      setPosts(formatted);
    };

    fetchPosts(); // 👈 Don’t forget to call the function
  }, []);

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

export default PostsPage;
