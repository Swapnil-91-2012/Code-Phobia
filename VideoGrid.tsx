import React from 'react';

const VideoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* TODO: Map over video data and render video cards */}
      <div className="bg-gray-200 aspect-video rounded-lg"></div>
      <div className="bg-gray-200 aspect-video rounded-lg"></div>
      <div className="bg-gray-200 aspect-video rounded-lg"></div>
      <div className="bg-gray-200 aspect-video rounded-lg"></div>
      <div className="bg-gray-200 aspect-video rounded-lg"></div>
      <div className="bg-gray-200 aspect-video rounded-lg"></div>
    </div>
  );
};

export default VideoGrid;
