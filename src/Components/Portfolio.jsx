import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link for navigation
import VideoGallery from './Gallery';

const Portfolio = ({ isHomepage = false }) => { // Add a prop to check if it's on the homepage
  const { category } = useParams(); // Get the category from URL params
  const [activeTab, setActiveTab] = useState(category || "reels");  // Default to "reels" if no category in URL

  useEffect(() => {
    // Update activeTab when category changes in URL
    setActiveTab(category || "reels");
  }, [category]);

  return (
    <div className="text-[#1a1a1a] py-10 px-5 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-15 font-sans overflow-hidden">
      <h2 className="text-left lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-[#1a1a1a] mb-15">Portfolio</h2>

      {/* Tabs for switching between Reels & Long-form */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-6 py-2 rounded-md transition ${
            activeTab === "reels"
              ? "bg-[#f5f5f5] border-1 scale-105"
              : "bg-gray-100 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("reels")}
        >
          Reels
        </button>
        <button
          className={`px-6 py-2 rounded-md transition ${
            activeTab === "longform"
              ? "bg-[#f5f5f5] border-1 scale-105"
              : "bg-gray-100 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("longform")}
        >
          Long-form Videos 
        </button>
      </div>

      {/* Video Gallery Component */}
      <VideoGallery category={activeTab} limit={isHomepage ? 3 : null} /> {/* Pass limit prop to show only 3 projects on homepage */}

      {/* Show "View More" button only on homepage */}
      {isHomepage && (
        <div className="mt-15 text-center">
          <Link
            to="/portfolio" // Redirect to the full portfolio page
            className="bg-white-400 text-black px-6 py-2 border-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            View More
          </Link>
        </div>
      )}
    </div>
  );
};

export default Portfolio;