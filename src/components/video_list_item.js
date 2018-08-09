import React from 'react';

const VideoListItem = ( {video, onVideoSelected} ) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelected(video)} className="list-group-item">
      <div className="video-list video-item media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-headind">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;