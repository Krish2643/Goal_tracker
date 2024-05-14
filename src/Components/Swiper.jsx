import React, { useState } from "react";

const Swiper = ({ handleClick }) => {
  const [position, setPosition] = useState(false);

  const handleClicked = () => {
    handleClick([0, 0, 0, 0, 0]);
    setPosition(true);
  };

  return (
    <div className="swiper_container" onClick={handleClicked}>
      <span className={position ? "right-side" : "left-side"}>Track</span>
      <p>Swiper to track all</p>
      <span className="Swipwr_arrow">&#10496;</span>
    </div>
  );
};

export default Swiper;
