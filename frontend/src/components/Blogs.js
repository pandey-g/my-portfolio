import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false); // Panel is hidden by default on small screens

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.error(error));
  }, []);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Collapsible Button */}
      <button
        onClick={togglePanel}
        className="fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded-lg focus:outline-none lg:hidden"
      >
        {isPanelOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>

      {/* Left Panel */}
      <div
        className={`fixed lg:static lg:block lg:w-1/4 w-1/2 bg-gray-200 dark:bg-gray-800 p-4 h-screen lg:h-auto overflow-y-auto z-40 transform transition-transform duration-300 ${
          isPanelOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Blogs</h2>
        <ul>
          {blogs.map(blog => (
            <li key={blog.id} className="mb-2">
              <Link
                to={`/blogs/${blog.id}`}
                className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition duration-300"
              >
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Blog Content</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Select a blog from the left panel to view its content.
        </p>
      </div>
    </div>
  );
};

export default Blogs;