import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, selectedVideo}) => {
    const renderList = videos.map((video)=>{
        return <VideoItem
            selectedVideo = {selectedVideo}
            key={video.etag} video={video}
        />
    });
    return (
        <div className="ui relaxed divided list">
            {renderList}
        </div>
    );
};

export default VideoList;
