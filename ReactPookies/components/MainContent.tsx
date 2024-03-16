import React from 'react';
import './MainContent.css'; // Assuming you create a CSS file for styles
import lolLogo from '../public/icons8-league-of-legends.svg'

function MainContent({ youtubeUrl, imageSrc, imageAlt, imageLink }) {
  const hasVideo = youtubeUrl !== undefined;

  return (
    <>
    <img src={lolLogo} className="logo lol" alt="LOL logo" />
    <div className={hasVideo ? "video-container" : "main-content"}>
      {hasVideo ? (
        <iframe
          width="920"
          height="605"
          src="https://www.youtube.com/embed/Y1MGS-wlxrM"
          title="Yone - League of Legends Montage"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <a href={imageLink} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} className="logo LOL logo-spin" alt={imageAlt} />
        </a>
      )}
    </div>
    </>
  );
}

export default MainContent;
