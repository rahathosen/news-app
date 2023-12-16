
import React from 'react';
import { extractVideoId } from '@/lib/utils';

interface YouTubePlayerProps {
    videoUrl: string;
  }
  
  const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoUrl }) => {
    const videoId = extractVideoId(videoUrl);
  
    if (!videoId) {
      return <div> Invalid YouTube URL</div>;
    }
  
    return (
      <div className="w-full lg:w-full mx-auto ">
        <div className="aspect-w-16 aspect-h-9 ">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg "
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default YouTubePlayer;