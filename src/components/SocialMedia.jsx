import React from 'react';
import { BsInstagram } from "react-icons/bs";

function SocialMedia(props) {
  return (
    <div className="app__social">
      <div
        onClick={() => {
        window.open('https://www.instagram.com/aske_saske/', '_blank');
        }}
        style={{cursor: "pointer"}}
      >
        <BsInstagram />
      </div>
    </div>
  );
}

export default SocialMedia;