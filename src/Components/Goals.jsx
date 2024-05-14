import React, { useState } from "react";
import Task from "./Task";
import Swiper from "./Swiper";
import Navbar from "./Navbar";

const daily_goals = [
  {
    id: 1,
    image: "task1",
    heading: "Workout for 20 mins",
    CName: "task1",
  },
  {
    id: 2,
    image: "task2",
    heading: "Read book for 15 mins",
    CName: "task2",
  },
  {
    id: 3,
    image: "task3",
    heading: "30 mins walk",
    CName: "task3",
  },
  {
    id: 4,
    image: "task4",
    heading: "sleep at 11 sharp",
    CName: "task4",
  },
  {
    id: 5,
    image: "task5",
    heading: "Drink 3L water",
    CName: "task5",
  },
];

const Goals = () => {
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTasks((prev) => [...prev, value]);
    } else {
      setTasks((prev) => prev.filter((e) => e !== value));
    }
  };

  const handleClick = (e) => {
    setTasks(e);
  };

  return (
    <div>
      <Navbar task={tasks.length} />
      <div className="goal_container">
        <div className="goal_heading">
          <p>Today's Goal</p>
          <img src="/images/heart.png" alt="heart" />
        </div>
        <div>
          {daily_goals.map((e) => {
            return (
              <Task
                key={e.id}
                image={e.image}
                heading={e.heading}
                CName={e.CName}
                handleChange={handleChange}
              />
            );
          })}
        </div>
        <Swiper handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Goals;
