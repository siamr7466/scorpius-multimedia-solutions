import React from "react";
import Lottie from "lottie-react";
import videoProduction from "./Animations/videoProduction.json"; 
import WEB from "./Animations/WEB.json";
import digitalMarkting from "./Animations/digitalMarkting.json";

const Projects = () => {
  // Array of projects
  const projects = [
    {
      id: 1,
      title: "Content Creation & Video Production",
      description: "Covers video creation, editing, and storytelling for clients.",
      media: "lottie",
      lottieSrc: videoProduction,
      link: "https://example.com/project1",
    },
    {
      id: 2,
      title: "Website & SEO Solutions",
      description: "Includes website development, search engine optimization, and online visibility improvement.",
      media: "lottie", // ✅ Corrected
      lottieSrc: WEB, // ✅ Now it will show animation
      link: "https://example.com/project2",
    },
    {
      id: 3,
      title: "Digital Marketing & Social Media Growth",
      description: "Focuses on consulting, strategy, and marketing to expand reach on social media and digital platforms.",
      media: "lottie",
      lottieSrc: digitalMarkting,
      link: "https://example.com/project3",
    },
  ];

  return (
    <div className="flex flex-col justify-evenly max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-15 font-sans overflow-hidden">
      {/* Projects Heading */}
      <div className="text-left lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-[#1a1a1a] mb-15">
        <h1>Services</h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-100 p-4 border-2 border-[#dadada] rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
          >
            {/* Project Media (Lottie Animation or Image) */}
            {project.media === "lottie" ? (
              <Lottie animationData={project.lottieSrc} className="h-64 w-full" />
            ) : (
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-auto object-cover rounded-t-lg"
              />
            )}

            {/* Project Title */}
            <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
            {/* Project Description */}
            <p className="text-gray-700">{project.description}</p>
            {/* Project Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
