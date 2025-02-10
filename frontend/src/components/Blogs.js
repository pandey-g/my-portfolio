import { useState, useEffect } from "react";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/blogs") // No need for full URL since proxy is configured
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .then(data => console.log(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  const fetchBlogDetails = (id) => {
    setLoading(true);
    fetch(`/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedBlog(data);
        setLoading(false);
      })
      
      .catch((err) => {
        console.error("Error fetching blog details:", err);
        setLoading(false);
      });
  };

  return (
    <div className="flex h-screen p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Left Panel - Blog List */}
      <div className="w-1/3 overflow-auto border-r border-gray-300 dark:border-gray-700 p-4">
        <h2 className="text-xl font-bold mb-4">Blogs</h2>
        <ul>
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="p-2 mb-2 cursor-pointer bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700"
              onClick={() => fetchBlogDetails(blog.id)}
            >
              {blog.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Panel - Blog Details */}
      <div className="w-2/3 p-4">
        {loading ? (
          <p>Loading...</p>
        ) : selectedBlog ? (
          <div>
            <h2 className="text-2xl font-bold">{selectedBlog.title}</h2>
            <ReactMarkdown
            className="prose dark:prose-invert max-w-none"
            remarkPlugins={[remarkGfm]} // Enables Markdown features like headings, tables, lists
          >
                {selectedBlog.content}
          </ReactMarkdown>
          </div>
        ) : (
          <p>Select a blog to view details</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
