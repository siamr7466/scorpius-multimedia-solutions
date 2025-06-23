import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Syeem Shahriar",
    role: "Founder",
    img: "./Images/syeem.jpg",
  },
  {
    name: "M P Shahriar",
    role: "CEO & Founder {IUBian}",
    img: "./Images/mp.jpg",
  },
  {
    name: "Siam Rahman",
    role: "Developer",
    img: "https://pagedone.io/asset/uploads/1696238446.png",
  },
  {
    name: "Mashfika Yasmin",
    role: "Lead Generation Specialist",
    img: "./Images/mashfi.jpg",
  },
];

const Team = () => {
  return (
    <div className="w-screen bg-[#F4F2F8] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <section className="py-15 font-sans overflow-hidden">
        {/* Header container aligned like FAQ & Portfolio */}
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-left lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-light text-[#1a1a1a]"
          >
            Our Team
          </motion.h2>
        </div>

        {/* Team members grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="block group md:col-span-2 lg:col-span-1">
              <div className="relative mb-6">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                {member.name}
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                {member.role}
              </span>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Team;
