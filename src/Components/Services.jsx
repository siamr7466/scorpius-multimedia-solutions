import React from "react";
import Lottie from "lottie-react";
import videoProduction from "./Animations/videoProduction.json";
import WEB from "./Animations/WEB.json";
import digitalMarkting from "./Animations/digitalMarkting.json";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Content Creation & Video Production",
      description: "Covers video creation, editing, and storytelling for clients.",
      media: "lottie",
      lottieSrc: videoProduction,
      link: "https://example.com/project1",
      bg: "bg-gradient-to-br from-green-400 via-blue-500 to-indigo-500",
    },
    {
      id: 2,
      title: "Website & SEO Solutions",
      description: "Includes website development, search engine optimization, and online visibility improvement.",
      media: "lottie",
      lottieSrc: WEB,
      link: "https://example.com/project2",
      bg: "bg-gradient-to-br from-green-400 via-blue-500 to-indigo-500",
    },
    {
      id: 3,
      title: "Digital Marketing & Social Media Growth",
      description: "Focuses on consulting, strategy, and marketing to expand reach on social media and digital platforms.",
      media: "lottie",
      lottieSrc: digitalMarkting,
      link: "https://example.com/project3",
      bg: "bg-gradient-to-br from-green-400 via-blue-500 to-indigo-500",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4EFFA] py-20 px-4 font-sans">
      <div className="w-full max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-[#1a1a1a] mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >Services</motion.h1>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`rounded-2xl text-white p-6 min-h-[480px] flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl ${project.bg}`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Animation */}
              <div className="h-52 mb-4">
                {project.media === "lottie" ? (
                  <Lottie animationData={project.lottieSrc} className="h-full w-full" />
                ) : (
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                )}
              </div>

              {/* Text */}
              <div>
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-white/90">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline mt-3 inline-block"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
