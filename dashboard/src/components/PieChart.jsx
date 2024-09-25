import React from 'react';
import { Chart } from 'primereact/chart';

const PieChart = () => {
  const data = {
    labels: ['Total Applicants', 'Not Reviewed'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,  // Allow custom height
  };

  return (
    <div style={{ width: '100%', height: '197px' }} className='chartPie'>
      <Chart type="pie" data={data} options={options} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default PieChart;
