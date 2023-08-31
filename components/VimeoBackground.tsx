// components/VimeoBackground.tsx

import React, { ReactNode } from 'react';

interface VimeoBackgroundProps {
  videoId: string;
  children: ReactNode;
}

const VimeoBackground: React.FC<VimeoBackgroundProps> = ({ videoId, children }) => {
  const vimeoUrl = `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&byline=0&title=0`;

  return (
    <div className="relative z-10 min-h-screen sm:block hidden">
      <iframe
        src={vimeoUrl}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute w-full h-full"
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default VimeoBackground;





// import React from 'react';
// import video from '../public/next.svg'

// const VideoBackground: React.FC = () => {
//   return (
//     <div className="relative z-0 min-h-screen">
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute z-10 min-w-full min-h-full object-cover"
//       >
//         <source src="https://vimeo.com/859673302?share=copy" type="video/mp4" />
//       </video>
//       <div className="absolute z-20 w-full h-full bg-black opacity-50"></div>
//       <div className="relative z-30 p-10">
//         {/* Your content here */}
//       </div>
//     </div>
//   );
// };

// export default VideoBackground;
