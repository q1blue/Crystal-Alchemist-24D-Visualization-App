import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Generate random data for the chart
const generateData = (timeframe: string) => {
  let labels: string[] = [];
  const count = timeframe === 'day' ? 24 : timeframe === 'week' ? 7 : 30;
  const unit = timeframe === 'day' ? 'h' : '';
  
  for (let i = 1; i <= count; i++) {
    labels.push(`${i}${unit}`);
  }
  
  const primaryData = Array.from({ length: count }, () => Math.floor(Math.random() * 80) + 20);
  const secondaryData = Array.from({ length: count }, () => Math.floor(Math.random() * 60) + 10);
  
  return { labels, primaryData, secondaryData };
};

interface ActivityChartProps {
  timeframe: string;
}

const ActivityChart = ({ timeframe }: ActivityChartProps) => {
  const [chartData, setChartData] = useState({ labels: [], primaryData: [], secondaryData: [] });
  
  useEffect(() => {
    setChartData(generateData(timeframe));
  }, [timeframe]);
  
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Crystalline Activity',
        data: chartData.primaryData,
        borderColor: 'rgba(36, 86, 255, 1)',
        backgroundColor: 'rgba(36, 86, 255, 0.05)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBorderColor: 'rgba(36, 86, 255, 1)',
        pointBackgroundColor: '#121212',
        pointRadius: 3,
        pointHoverRadius: 5,
      },
      {
        label: 'Energy Transfer',
        data: chartData.secondaryData,
        borderColor: 'rgba(4, 191, 191, 1)',
        backgroundColor: 'rgba(4, 191, 191, 0.05)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBorderColor: 'rgba(4, 191, 191, 1)',
        pointBackgroundColor: '#121212',
        pointRadius: 3,
        pointHoverRadius: 5,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            size: 12,
          },
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(18, 18, 18, 0.9)',
        titleColor: 'rgba(255, 255, 255, 0.9)',
        bodyColor: 'rgba(255, 255, 255, 0.7)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: 10,
        cornerRadius: 8,
        displayColors: true,
        usePointStyle: true,
        boxWidth: 6,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
      },
    },
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
  };
  
  return <Line data={data} options={options} />;
};

export default ActivityChart;