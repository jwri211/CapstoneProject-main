/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * This is the modal for the video on the home page. Creacted as a react
 * component.
 */

import React from "react";

// import video to be used
import Video from "./videos/R&E-video.mp4";

// Assign properties to be used when accessing component
function Modal({ visible, onClose }) {
  // function to handle the closing of the modal
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  //only render component if visible set to true
  if (!visible) return null;
  return (
    <div
      id="container"
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
      onClick={handleOnClose}
    >
      <video
        loop
        controls
        className="w-[26rem] lg:w-[60rem] rounded-xl shadow-lg"
      >
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Modal;
