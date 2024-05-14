import React, { useState } from "react";
import "./Page1.css";
import Goals from "../Components/Goals";
import { UserData } from "../data";
import BarChart from "../Components/BarChart";


const Page1 = () => {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        label: "Progress Percentage",
        data: UserData.map((data) => data.toPercentage),
        backgroundColor: ["#5A92CB"],
      },
    ],
  });

  return (
    <div className="page-container">
      <Goals />
      <div
        style={{
          width: 300,
          height: 170,
          marginBottom: 50,
          backgroundColor: "#282828",
        }}
      >
        <BarChart chartData={userData} />
      </div>
    </div>
  );
};

export default Page1;
