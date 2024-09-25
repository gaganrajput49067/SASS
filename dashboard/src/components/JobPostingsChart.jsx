import React from 'react';
import { Chart } from 'primereact/chart';
import './JobPostingsChart.scss';

const JobPostingsChart = () => {
  const data = {
    labels: ["Your Job Postings"],
    datasets: [
      {
        label: "Private Equity Associate 1",
        backgroundColor: "#7E57C2",
        data: [100],
      },
      {
        label: "Private Equity Associate 2",
        backgroundColor: "#42A5F5",
        data: [150],
      },
      {
        label: "Private Equity Associate 3",
        backgroundColor: "#26C6DA",
        data: [250],
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        max: 300,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="card">
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default JobPostingsChart;
