import React from "react";
import Lottie from "lottie-react";
import videoProduction from "./Animations/videoProduction.json";
import WEB from "./Animations/WEB.json";
import digitalMarkting from "./Animations/digitalMarkting.json";
import { motion } from "framer-motion";

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
    description: "Includes website development, SEO, and visibility improvement.",
    media: "lottie",
    lottieSrc: WEB,
    link: "https://example.com/project2",
  },
  {
    id: 3,
    title: "Digital Marketing & Social Media Growth",
    description: "Strategy and consulting to grow digital presence.",
    media: "lottie",
    lottieSrc: digitalMarkting,
    link: "https://example.com/project3",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#F4F2F8] py-28 px-5 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[clamp(2rem,6vw,5rem)] font-light text-[#111111] mb-20 leading-tight"
        >
          Services
        </motion.h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group block bg-white rounded-3xl p-6 min-h-[480px] shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Lottie Animation */}
              <div className="h-52 mb-6 rounded-xl overflow-hidden bg-[#F9F9F9]">
                {project.media === "lottie" && (
                  <Lottie animationData={project.lottieSrc} className="h-full w-full" />
                )}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[#111111]">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-5 leading-relaxed">
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-2 font-semibold text-[#111111] group-hover:text-[#0a122a] group-hover:underline">
                  View Project
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
