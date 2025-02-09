import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/${id}`)
      .then(response => setBlog(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!blog) return <div className="p-4 lg:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">Loading...</div>;

  return (
    <div className="p-4 lg:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
        {blog.title}
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
        {blog.content}
      </p>
    </div>
  );
};

export default BlogDetail;