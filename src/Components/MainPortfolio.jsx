import React from "react";

const VideoGallery = ({ category }) => {
  const videos = [
    { id: 1, title: "Reel 1", url: "./videos/Video 1.mp4", type: "reels", description: "Creative reel showcasing storytelling." },
    { id: 2, title: "Reel 2", url: "./videos/Video 8.mp4", type: "reels", description: "Dynamic motion graphics highlight." },
    { id: 3, title: "Reel 3", url: "./videos/Video-2.mp4", type: "reels", description: "Visual effects and editing showcase." },
    { id: 4, title: "Reel 4", url: "./videos/Video-2.mp4", type: "reels", description: "Cinematic shots and color grading." },
    { id: 5, title: "Reel 5", url: "./videos/Video-2.mp4", type: "reels", description: "Fast-paced cutting and transitions." },
    { id: 6, title: "Reel 6", url: "./videos/Video-2.mp4", type: "reels", description: "Experimental video production." },
    { id: 7, title: "Long Video 1", url: "./videos/nsu1.mp4", type: "longform", description: "In-depth documentary style video." },
    { id: 8, title: "Long Video 2", url: "./videos/nsu2.mp4", type: "longform", description: "Longform narrative storytelling." },
  ];

  const filteredVideos = videos.filter((video) => video.type === category);

  return (
    <section className=" py-28 px-5 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[clamp(2rem,6vw,5rem)] font-light text-[#111] mb-20 leading-tight text-center">
          Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <div
                key={video.id}
                className="relative bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer group"
              >
                {/* Video container */}
                <div className="relative overflow-hidden rounded-3xl">
                  <video
                    width="100%"
                    className="rounded-3xl transform transition-transform duration-300 group-hover:scale-105"
                    controlsList="nodownload"
                    disablePictureInPicture
                    onMouseEnter={(e) => e.target.setAttribute("controls", "true")}
                    onMouseLeave={(e) => e.target.removeAttribute("controls")}
                    muted
                    loop
                    playsInline
                  >
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Hover overlay with animated text */}
                  <div className="absolute inset-0 flex items-start justify-center pt-[25%] px-6 text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-purple-700 text-2xl font-bold tracking-wide animate-fade-in-down">
                      {video.description}
                    </p>
                  </div>
                </div>

                {/* Video title below */}
                <p className="mt-4 text-center text-[#111111] text-lg font-light">
                  {video.title}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No videos available for this category.</p>
          )}
        </div>
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-down {
            animation: fadeInDown 0.6s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default VideoGallery;
