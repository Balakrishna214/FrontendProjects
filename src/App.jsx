import React, { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiTailwindcss } from "react-icons/si";

const App = () => {
  // Project data
  const projects = [
    {
      title: "React Jobby App",
      github: "https://github.com/Balakrishna214/React-JobbyApp",
      deploy: "https://react-jobby-app-ebon.vercel.app/",
    },
    {
      title: "Rock Paper Scissor",
      github: "https://github.com/Balakrishna214/react-rock-paper-scissor",
      deploy: "https://react-rock-paper-scissor-dusky.vercel.app/",
    },
    {
      title: "Video Streaming Platform",
      github: "https://github.com/Balakrishna214/video-streaming-platform",
      deploy: "https://video-streaming-platform-roan.vercel.app/",
    },
    {
      title: "Movie Search App (Redux)",
      github: "https://github.com/Balakrishna214/MoviesSearchApp",
      deploy: "https://reduxandreactmoviesearchapp.netlify.app/",
    },
    {
      title: "Food App",
      github: "https://github.com/Balakrishna214/FrontendFoodPage",
      deploy: "https://frontend-food-page.vercel.app/",
    },
    {
      title: "Movie Search App",
      github: "https://github.com/Balakrishna214/movie-search-app",
      deploy: "https://movie-search-app-u711.vercel.app/",
    },
  ];

  // Add animation on page load
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((el) => el.classList.remove("opacity-0", "translate-x-[-50px]"));
  }, []);

  // Frontend technologies data
  const technologies = [
    { icon: <FaHtml5 className="w-12 h-12 text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="w-12 h-12 text-blue-500" />, name: "CSS3" },
    {
      icon: <IoLogoJavascript className="w-12 h-12 text-yellow-400" />,
      name: "JavaScript",
    },
    { icon: <FaReact className="w-12 h-12 text-blue-400" />, name: "React" },
    { icon: <SiRedux className="w-12 h-12 text-purple-500" />, name: "Redux" },
    {
      icon: <SiTailwindcss className="w-12 h-12 text-blue-300" />,
      name: "Tailwind CSS",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Experiences Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h2 className="text-5xl font-bold mb-6">Frontend Experience</h2>
            {/* Technology Icons */}
            <div className="flex space-x-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="animate-floatIn opacity-0 transform translate-x-full"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>

          <ul className="space-y-4">
            {[
              "Proficient in creating single-page applications using React (CRA & Vite).",
              "Experienced in React Router, authentication, and authorization using tokens stored in cookies.",
              "Skilled in CSS, Bootstrap, Tailwind CSS, Styled Components, and responsive design with media queries.",
              "Expertise in React Hooks (useState, useEffect, useContext) and Redux Toolkit for central state management.",
              "Ability to break applications into reusable and optimized components.",
            ].map((point, index) => (
              <li
                key={index}
                className="animate-on-load opacity-0 translate-x-[-50px] transition-all duration-500 ease-in-out"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500  hover:bg-slate-400 hover:text-yellow-50">
                  {point}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-on-load opacity-0 translate-y-[50px] transition-all duration-500 ease-in-out bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl border border-gray-200
                 hover:scale-110 hover:bg-slate-400 hover:text-yellow-50"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 255, 0.1), 0 2px 4px -1px rgba(0, 0, 255, 0.06)",
                }}
              >
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Deploy
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;