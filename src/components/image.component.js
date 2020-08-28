import React from "react";

const Image = (props) => {
  return (
    <a href={props.src} target="_blank" rel="noopener noreferrer">
      <img className="photo" src={props.src} alt={props.alt} />
    </a>
  );
};

export default Image;
