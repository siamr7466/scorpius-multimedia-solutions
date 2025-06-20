import React from "react";
import { motion } from "framer-motion";
import GSAP from "./Animations/GSAP";

const Hero = () => {
  return (
    <div  className="relative h-screen overflow-hidden font-sans rounded-lg">
      <GSAP />

      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/Web.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Blur Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-evenly max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-15">
        <div className="flex flex-col space-y-4">
          <motion.h1
            className="hero-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl w-full md:w-1/2 lg:w-full text-[#fff]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Scorpius <br />
            Multimedia Solution
          </motion.h1>

          <motion.h4
            className="hero-subheading text-lg sm:text-xl md:text-xl lg:text-xl w-full md:w-1/2 lg:w-1/2 text-[#fff]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            From vision to reality. We design, edit and optimize, <br />
            Your all-in-one Digital Partner.
          </motion.h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
