import React from "react";
import { motion } from "framer-motion";
import GSAP from "./Animations/GSAP";
import ParticleBackground from "./ParticleBackground"
const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center max-w-9xl mx-auto px-6 sm:px-12 lg:px-24 py-20 font-sans">
      <GSAP />
      {/* Content */}
      <div className="text-center max-w-5xl mx-auto">
        <motion.h1
          className="text-white font-thin text-6xl sm:text-7xl md:text-8xl leading-tight"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Scorpius Multimedia
          <br />
          Solution
        </motion.h1>

        <motion.h4
          className="text-white/90 font-light text-lg sm:text-xl mt-6 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          From vision to reality. We design, edit and optimize, <br />
          Your all-in-one Digital Partner.
        </motion.h4>
      </div>
    </section>
  );
};

export default Hero;
