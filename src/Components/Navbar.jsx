import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Navbar = ({ task }) => {
  return (
    <div className="navbar_container">
      <img className="navbar_img" src="/images/bulley.png" alt="image" />
      <div className="navbar_content">
        <h5 className="navbar_heading">Your Daily Goal Almost Done</h5>
        <p className="navbar_sub_heading">
          {task > 5 ? task % 5 : task} Of 5 Completed
        </p>
        <div className="progress_bar_container">
          <ProgressBar
            className="progress_bar"
            completed={task > 5 ? ((task - 5) * 100) / 5 : (task * 100) / 5}
            animateOnRender="true"
            height="3px"
            bgColor="white"
            baseBgColor="rgb(95, 168, 228)"
          />
          <span>{task > 5 ? ((task - 5) * 100) / 5 : (task * 100) / 5}%</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
