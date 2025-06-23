import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import VideoGallery from './Gallery';

const Portfolio = ({ isHomepage = false }) => {
  const { category } = useParams();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(category || "reels");

  useEffect(() => {
    setActiveTab(category || "reels");
  }, [category, location.pathname]); // <-- added location.pathname here

  return (
    <div className="w-screen bg-white relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5">
          {/* Heading */}
          <h2 className="text-left lg:text-7xl md:text-6xl sm:text-5xl text-4xl mb-12 font-light text-[#1a1a1a]">
            Portfolio
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-6 mb-12">
            {["reels", "longform"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-3 rounded-md font-medium overflow-hidden transition-all duration-300
                  ${activeTab === tab
                    ? "text-white bg-[#0a122a]"
                    : "text-[#0a122a] bg-white hover:text-white"
                  }
                  before:absolute before:inset-0 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:bg-[#0a122a] hover:before:scale-x-100
                  before:rounded-md
                `}
                style={{ zIndex: 1 }}
              >
                <span className="relative z-10 capitalize">{tab === 'reels' ? 'Reels' : 'Long-form Videos'}</span>
              </button>
            ))}
          </div>

          {/* Video Gallery */}
          <VideoGallery category={activeTab} limit={isHomepage ? 3 : null} />

          {/* View More Button */}
          {isHomepage && (
            <div className="mt-12 text-center">
              <Link
                to="/portfolio"
                className="relative inline-block px-6 py-3 text-[#0a122a] bg-white rounded-md font-medium overflow-hidden
                  before:absolute before:inset-0 before:bg-[#0a122a] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300
                  hover:text-white transition-colors duration-300 before:rounded-md border border-[#0a122a]"
              >
                <span className="relative z-10">View More</span>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
