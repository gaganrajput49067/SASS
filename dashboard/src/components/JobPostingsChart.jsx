import React from 'react';
import { Chart } from 'primereact/chart';
import './JobPostingsChart.scss';

const JobPostingsChart = () => {
 
  const data = {
    labels: ["Order Summary"],
    datasets: [
      {
        label: "Processed Orders",
        backgroundColor: "#7E57C2",
        data: [120],
      },
      {
        label: "Pending Orders",
        backgroundColor: "#42A5F5",
        data: [90],
      },
      {
        label: "Cancelled Orders",
        backgroundColor: "#26C6DA",
        data: [30],
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        max: 150,
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
    <div className="card order-summary-chart">
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};


export default JobPostingsChart;
