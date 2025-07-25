import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';


type Post = {
  title: string;
  content: string;
};

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddPost = (data: { title: string; content: string }) => {
    setPosts([...posts, data]);
    setModalOpen(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Posts</h1>
      <button
        onClick={() => setModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add New Post
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      {modalOpen && (
        <PostModal
          onSubmit={handleAddPost}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default HomePage;


<>
  <Header />
  <main className="p-6">
    {/* Existing content here */}
  </main>
</>
