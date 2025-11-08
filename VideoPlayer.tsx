import React from 'react';

const VideoPlayer: React.FC = () => {
  return (
    <div>
      <div className="aspect-video bg-black">
        {/* Main video player */}
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-bold">Video Title</h1>
        <p className="text-gray-600">Channel Name</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
