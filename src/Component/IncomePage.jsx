import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const IncomePage = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Ju', 'Au', 'Se', 'Oc', 'No', 
          new Date().toLocaleString('default', { month: 'long' }) // Current month
        ],
        datasets: [{
          label: 'Income',
          data: [4,1.5,3,2.5,1.5,0.5], 
          backgroundColor: ['#FFEAD0', '#FFEAD0', '#FFEAD0', '#FFEAD0', '#FF8C38', '#FF8C38'], 
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 5, 
            ticks: {
              stepSize: 1,
              callback: value => `$${value}k`, 
            },
          },
          x: {
            grid: {
              display: false, 
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

    return () => chart.destroy();
  }, []);

  return (
    <section className="lg:p-6 p-2">
      <h1 className="text-2xl lg:text-4xl">Income Page</h1>

      <small>Last <b>30 Days</b></small>
      <p className="lg:text-3xl font-bold">$2,260</p>

      <main className='w-full p-2'>
      <canvas ref={chartRef} width="" height="" />
      </main>
    </section>
  );
}

export default IncomePage;
