import React from 'react';

const VideoDetail = ({ video }) => {
  console.log('VideoDetail', video);
  if (!video) {
    return <div>Loading...</div>;
  }
  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
