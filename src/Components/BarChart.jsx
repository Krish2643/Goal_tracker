import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const options = {
  elements: {
    bar: {
      borderRadius: 5,
      borderWidth: 4,
    },
  },
};

const BarChart = ({ chartData }) => {
  return <Bar data={chartData} options={options} height={180} />;
};

export default BarChart;
