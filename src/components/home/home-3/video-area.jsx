import VideoPopup from "@/modals/video-popup";
import React, { useState } from "react";

const VideoArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="video-area pt-10">
        <div className="video-bg p-relative">
          <img src="/assets/img/banner/tp-video-bg-01.jpg" alt="video-bg" />
          <div className="video-bg-icon">
            <a
              onClick={() => setIsVideoOpen(true)}
              style={{ cursor: "pointer" }}
              className="popup-video"
            >
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"d8w5SICzzxc"}
      />
      {/* video modal end */}
    </>
  );
};

export default VideoArea;
