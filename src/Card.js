import React from "react";
const Card = ({ src, name, click, flip }) => {
  return (
    <div className={`oneCard ${flip ? "flipped" : null}`} onClick={click}>
      <div className="inner">
        <div className="front">
          <img src={src} alt={name} width={100} />
        </div>
        <div className="back"></div>
      </div>
    </div>
  );
};

export default Card;
