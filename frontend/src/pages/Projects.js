// src/components/Projects.js
import React from "react";
import { projects } from "../data/projectData";

const Projects = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        My Work
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Skills Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold text-white mb-4">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;