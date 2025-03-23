import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col justify-evenly max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-15 font-sans overflow-hidden">
     

      {/* Content */}
      <div className="relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl w-full md:w-1/2 mb-8 lg:w-full text-[#1a1a1a]">
          Scorpius <br/>Multimedia Solution
        </h1>

        {/* Subheading */}
        <h4 className="text-lg sm:text-xl md:text-xl lg:text-xl w-full md:w-1/2 lg:w-1/2 text-[#707070]">
          From vision to reality, We design, edit and optimize, <br/> Your all-in-one Digital Partner
        </h4>
      </div>
    </div>
  );
};

export default Hero;
