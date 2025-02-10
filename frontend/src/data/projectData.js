// src/data/projectData.js
import portfolio from '../assets/project/Portfolio.png'
import notebook from '../assets/project/NoteBook.jpg'
import diabetespred from '../assets/project/DiabetesPrediction.png'
import algerianfireforest from '../assets/project/AlgerianFireForest.png'

export const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      image: portfolio,
      skills: [
        { name: "React", icon: "react-icon" },
        { name: "Tailwind CSS", icon: "tailwind-icon" },
        { name:"Flask", icon: "flask-icon"},
        {name : "MongoDB", icon: "mongodb-icon"},
      ],
      github: "https://github.com/pandey-g/my-portfolio",
    },
    {
      id: 2,
      name: "AI / ML Notes",
      image:notebook,
      skills: [
        { name: "Jupyter", icon: "jupyter-icon" },
        
      ],
      github: "https://github.com/pandey-g/DataScienceNotes",
    },
    {
        id: 3,
        name: "Diabetes Prediction",
        image:diabetespred,
        skills: [
          { name: "Jupyter", icon: "jupyter-icon" },
          { name: "Python", icon: "python-icon" },
          { name: "Flask", icon: "flask-icon" }
        ],
        github: "https://github.com/pandey-g/DiabetesPredictionDecisionTreeAndSVM",
      },
      {
        id: 4,
        name: "Algerian Fire Forest",
        image:algerianfireforest,
        skills: [
          { name: "Jupyter", icon: "jupyter-icon" },
          { name: "Python", icon: "python-icon" },
          { name: "Flask", icon: "flask-icon" }
        ],
        github: "https://github.com/pandey-g/AlgerainFireForest",
      },
  ];