import React, { FC } from 'react';

import './video-box.scss';

const VideoBox: FC = () => {
  return (
    <div className='video-wrapper'>
      <div className='video-responsive'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/j942wKiXFu8'
          title='YouTube video'
          allowFullScreen
          frameBorder={0}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        />
      </div>
    </div>
  );
};

export default VideoBox;
