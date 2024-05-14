import React from "react";

const Task = ({ image, heading, CName, handleChange }) => {
  return (
    <div className="task_container">
      <img src={`/images/${image}.png`} alt="task" />
      <label className="task_heading" htmlFor={CName}>
        {heading}
      </label>
      <input
        type="checkbox"
        className={`${CName} check `}
        name={CName}
        id={CName}
        onChange={handleChange}
        value={CName}
      />
    </div>
  );
};

export default Task;
