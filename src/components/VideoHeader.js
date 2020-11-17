import React from "react";
import "./VideoHeader.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";

function VideoHeader() {
  return (
    <div className="videoheader">
      <ArrowBackIosIcon />
      <img
        className="app__logo"
        src="https://wbom.ca/newWP/wp-content/uploads/2016/11/White-Instagram-Logo.png"
        alt=""
      />
      <CameraAltOutlinedIcon />
    </div>
  );
}

export default VideoHeader;
