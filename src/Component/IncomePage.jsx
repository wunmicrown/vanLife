import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const IncomePage = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Generate random income data for the past 6 months
    // const randomIncomeData = Array.from({ length: 6 }, () => Math.floor(Math.random() * 5));

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Ju', 'Au', 'Se', 'Oc', 'No', 
          new Date().toLocaleString('default', { month: 'long' }) // Current month
        ],
        datasets: [{
          label: 'Income',
          data: [4,1.5,3,2.5,1.5,0.5], // Random income data for the past 6 months
          backgroundColor: ['#FFEAD0', '#FFEAD0', '#FFEAD0', '#FFEAD0', '#FF8C38', '#FF8C38'], // Deep orange for the latest month, faded orange for past months
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 5, // Set y-axis range from $0 to $5k
            ticks: {
              stepSize: 1, // Set step size for y-axis ticks
              callback: value => `$${value}k`, // Format y-axis labels as $Xk
            },
          },
          x: {
            grid: {
              display: false, // Hide x-axis grid lines
            },
          },
        },
        plugins: {
          legend: {
            display: false, // Hide legend
          },
        },
      }
    });

    return () => chart.destroy(); // Cleanup when component unmounts
  }, []);

  return (
    <section className="lg:p-6 p-2">
      <h1 className="text-2xl lg:text-4xl">Income Page</h1>

      <small>Last <b>30 Days</b></small>
      <p className="lg:text-3xl font-bold">$2,260</p>

      <main className='w-full p-2'>
      <canvas ref={chartRef} width="" height="" /> {/* Adjust canvas width and height as needed */}
      </main>
    </section>
  );
}

export default IncomePage;
