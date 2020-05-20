import React from 'react';

// { video } === const video = props.video;
const VideoItem = ({ video }) => {
  console.log(video);
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;
