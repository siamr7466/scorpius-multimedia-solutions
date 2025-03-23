import React from "react";
import Footer from "./Footer";
const ContactSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-15 font-sans overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Details and Social Links */}
        <div>
          <p className="text-left lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-[#1a1a1a] mb-15">Contact us</p>
          {/* <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
            Get in touch
          </h1>
          <p className="mt-3 text-gray-500">
            Our friendly team is always here to chat.
          </p> */}
          
          <div className="mt-6 space-y-6">
            {[
              { title: "Email", info: "scorpiusmultimedia@gmail.com" },
              { title: "Office", info: "664 Begum Rokeya Ave, Dhaka 1216" },
              { title: "Phone", info: "+8801783123690" }
            ].map((item, index) => (
              <div key={index}>
                <h2 className="text-lg font-medium text-gray-800">{item.title}</h2>
                <p className="text-gray-500">{item.info}</p>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-800">Follow us</h2>
            <p className="text-gray-500"><a href=" https://www.facebook.com/share/16LdCTqbD5/">Facebook</a> | <a href="/">WhatsApp</a> | <a href="/">Instagram</a> | <a href="/">Telegram</a></p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full p-2 border rounded-md bg-white" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border rounded-md bg-white" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea className="w-full p-2 border rounded-md bg-white" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    
  
  );
};

export default ContactSection;
