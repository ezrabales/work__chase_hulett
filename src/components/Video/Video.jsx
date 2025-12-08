import "./Video.css";
import { useState } from "react";

const Video = ({ source }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="video">
      {!isLoaded && <div className="placeholder"></div>}
      <video
        src={source}
        onLoadedData={() => setIsLoaded(true)}
        type="video/mp4"
        autoPlay
        loop
        muted
        style={{
          borderRadius: "12px",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
