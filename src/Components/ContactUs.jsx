import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="w-screen bg-[#F4F2F8] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20 font-sans">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Animated Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-left lg:text-7xl md:text-6xl sm:text-5xl text-4xl mb-16 font-light text-[#1a1a1a]"
        >
          Contact us
        </motion.h2>

        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              {[
                { title: "Email", info: "scorpiusmultimedia@gmail.com" },
                { title: "Office", info: "664 Begum Rokeya Ave, Dhaka 1216" },
                { title: "Phone", info: "+8801783123690" },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.info}</p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Follow us</h3>
              <p className="text-gray-600 space-x-4">
                <a href="https://www.facebook.com/share/16LdCTqbD5/" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
                <a href="/" className="hover:underline">WhatsApp</a>
                <a href="/" className="hover:underline">Instagram</a>
                <a href="/" className="hover:underline">Telegram</a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-800 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#0a122a]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#0a122a]"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">Message</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#0a122a]"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#0a122a] text-white font-semibold rounded-lg hover:bg-[#141e4d] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
