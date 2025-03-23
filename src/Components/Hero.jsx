import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col justify-evenly max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-15 font-sans overflow-hidden">
     

      {/* Content */}
      <div className="relative z-10">
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl w-full md:w-1/2 mb-8 text-[#1a1a1a]">
          Scorpius Multimedia Solution
        </h1>

        {/* Subheading */}
        <h4 className="text-lg sm:text-xl md:text-xl lg:text-xl w-full md:w-1/2 lg:w-1/2 text-[#707070]">
          From vision to reality, We design, edit and optimize, Your all-in-one
          digital partner
        </h4>
      </div>
    </div>
  );
};

export default Hero;
