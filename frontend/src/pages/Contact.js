import React, { useState } from "react";
import gitHubImage from '../assets/icons8-github.svg';
import linkedInImage from '../assets/icons8-linkedin.svg';
import xImage from '../assets/icons8-x.svg';
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-8 text-center">Reach Out</h1>

      {/* Container with two sections side by side */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        {/* Section 1: Contact Info */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Feel free to reach out to me!</p>
          <p className="text-lg font-semibold">Email: lawbindpandey01w@gmail.com</p>
          <p className="text-lg font-semibold">Phone: +91 8019717994</p>
          <p className="text-lg font-semibold">Location: Hyderabad, India 🇮🇳</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500 dark:text-blue-400"><img src={gitHubImage} alt="GitHub" className="w-12 h-12" /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500 dark:text-blue-400"><img src={linkedInImage} alt="LinkedIn" className="w-12 h-12" /></a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500 dark:text-blue-400"><img src={xImage} alt="X" className="w-12 h-12" /></a>
          </div>
        </div>

        {/* Section 2: Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required className="w-full p-3 border rounded-2xl bg-white dark:bg-gray-700 text-black dark:text-white shadow-sm" />
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required className="w-full p-3 border rounded-2xl bg-white dark:bg-gray-700 text-black dark:text-white shadow-sm" />
          <textarea name="message" placeholder="Your Message" onChange={handleChange} required className="w-full p-3 border rounded-2xl bg-white dark:bg-gray-700 text-black dark:text-white h-32 shadow-sm"></textarea>
          <button type="submit" className="w-full p-3 bg-blue-500 dark:bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
