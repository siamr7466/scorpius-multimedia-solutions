import React from 'react';

const VideoGallery = ({ category }) => {
  // Sample video data
  const videos = [
    { id: 1, title: 'Reel 1', url: './videos/Video 1.mp4', type: 'reels' },
    { id: 2, title: 'Reel 2', url: './videos/Video 8.mp4', type: 'reels' },
    { id: 3, title: 'Reel 3', url: './videos/Video-2.mp4', type: 'reels' },
    { id: 4, title: 'Reel 4', url: './videos/Video-2.mp4', type: 'reels' },
    { id: 5, title: 'Reel 5', url: './videos/Video-2.mp4', type: 'reels' },
    { id: 6, title: 'Reel 6', url: './videos/Video-2.mp4', type: 'reels' },
    { id: 7, title: 'Long Video 1', url: './videos/nsu1.mp4', type: 'longform' },
    { id: 8, title: 'Long Video 2', url: './videos/nsu2.mp4', type: 'longform' },
  ];

  // Filter videos based on the selected category
  const filteredVideos = videos.filter((video) => video.type === category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredVideos.length > 0 ? (
        filteredVideos.map((video) => (
          <div
            key={video.id}
            className="video-item p-4 rounded-lg shadow-lg group transition-transform duration-300 hover:transform hover:translate-y-[-10px] hover:shadow-xl relative"
          >
            {/* Video Container */}
            <div className="relative">
              <video
                width="100%"
                className="rounded-lg"
                controlsList="nodownload"
                disablePictureInPicture // Disable PiP
                onMouseEnter={(e) => e.target.setAttribute('controls', 'true')} // Show controls on hover
                onMouseLeave={(e) => e.target.removeAttribute('controls')} // Hide controls when not hovering
              >
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <p className="mt-2 text-center">{video.title}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No videos available for this category.</p>
      )}
    </div>
  );
};

export default VideoGallery;
