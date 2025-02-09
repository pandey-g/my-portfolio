import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../assets/LawDP.jpg';

const Home = () => {
  return (
    <div className="p-4 lg:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col lg:flex-row">
      {/* Image Section */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0 lg:pr-8">
        <div className="w-full h-full lg:h-auto lg:min-h-[calc(100vh-4rem)] flex items-center justify-center rounded-lg overflow-hidden shadow-lg">
        <img
  src={profileImage}
  alt="Law Bind Pandey"
  className="w-full h-full object-cover"
/>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-2/3 flex flex-col justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          I am Law Bind Pandey
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          <TypeAnimation
            sequence={[
              'Software Engineer',
              1000, // Delay after typing
              'AI/ML Enthusiast',
              1000,
              'Mathematics Lover',
              1000,
            ]}
            wrapper="span"
            speed={50} // Typing speed
            style={{ display: 'inline-block' }}
            repeat={Infinity} // Repeat the animation infinitely
          />
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
          A mathematics enthusiast with a good understanding of AI/ML and a research-oriented mindset. With 2 years of experience as a software developer in .NET, I aspire to become a machine learning engineer. I also have a strong foundation in Data Structures and Algorithms (DSA).
        </p>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Let's Connect!
        </p>
      </div>
    </div>
  );
};

export default Home;