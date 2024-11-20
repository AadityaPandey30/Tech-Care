import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
  } from "chart.js";
import data from "../assets/Jessica.json";
import down from "../assets/down.svg";


// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// Extract diagnosis history data for plotting
const bloodPressureData = data.diagnosis_history.map((entry) => ({
  x: `${entry.month}, ${entry.year}`,
  systolic: entry.blood_pressure.systolic.value,
  diastolic: entry.blood_pressure.diastolic.value,
}));

// Filter data for the last 6 months
const lastSixMonthsData = bloodPressureData.slice(-6);

const BP = () => {

 // Prepare data for Chart.js
 const chartData = {
    labels: lastSixMonthsData.map((item) => item.x),
    datasets: [
      {
        label: "Systolic Pressure",
        data: lastSixMonthsData.map((item) => item.systolic),
        borderColor: "rgba(255, 99, 132, 1)", // Pink
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        borderJoinStyle: "round",
        tension: 0.6,
      },
      {
        label: "Diastolic Pressure",
        data: lastSixMonthsData.map((item) => item.diastolic),
        borderColor: "rgba(153, 102, 255, 1)", // Purple
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderWidth: 2,
        borderJoinStyle: "bevel",
        tension: 0.6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
        //   text: "Month, Year",
        },
      },
      y: {
        title: {
          display: true,
        //   text: "Pressure (mmHg)",
        },
        beginAtZero: false,
      },
    },
  };

  return (
    <div>
      <div className="chart-container mt-4 h-[30vh] bg-[#F4F0FE] rounded-[12px] p-3">
        
        <div className="flex justify-between"><h3 className="text-lg font-semibold">Blood Pressure </h3>
            <img src={down}/><p>Last 6 months</p>
        </div>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  )
}

export default BP
