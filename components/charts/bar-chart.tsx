"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


interface BarChartProps {
  label1: string,
  label2: string,
  label3: string,
  title: string;
  labelSet: string[];
  dataSet1: number[] | string[];
  dataSet2: number[] | string[];
  dataSet3: number[] | string[];
}

export const BarChart = ({
  label1,
  label2,
  label3,
  title,
  labelSet,
  dataSet1,
  dataSet2,
  dataSet3,
}: BarChartProps) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: `${title}`,
        data: [],
        backgroundColor: [
          "rgb(75, 192, 192)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
        ],
        borderColor: [
          "rgb(75, 192, 192)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const options: Chart.ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: `${title}`,
        font: {
          family: "Arial",
          size: 16,
          style: "bold",
          color: "red",
        },
      },
    },
    
  };

  useEffect(() => {
    setData({
      // @ts-ignore
      labels: labelSet,
      datasets: [
        {
          label: `${label1}`,
          // @ts-ignore
          data: dataSet1,
          backgroundColor: ["rgb(75, 192, 192)"],
          borderColors: ["rgb(75, 192, 192)"],
        },
        {
          label: `${label2}`,
          // @ts-ignore
          data: dataSet2,
          backgroundColor: ["rgb(255, 205, 86)"],
          borderColors: ["rgb(255, 205, 86)"],
        },
        {
          label: `${label3}`,
         // @ts-ignore
          data: dataSet3,
          backgroundColor: ["rgb(255, 99, 132)"],
          borderColors: ["rgb(255, 99, 132)"],
        },
      ],
    });
  }, [labelSet, dataSet1, dataSet2, dataSet3, label1, label2, label3]);

  return (
    <div className="w-[100%] h-[100%] mt-10">
       {/* @ts-ignore */}
      <Bar data={data} options={options}/>
    </div>
  );
};
