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
import upp from "../assets/upp.svg";
import downn from "../assets/downn.svg";


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
        <h2 className="text-2xl font-bold">Diagnosis History</h2>
      <div className="chart-container mt-4 bg-[#F4F0FE] rounded-[12px] p-3 flex">
        <div className="w-2/3">
            <div className="flex justify-between"><h3 className="text-lg font-semibold mb-2">Blood Pressure </h3>
                <div className="flex"><p className="mr-3 text-gray-800">Last 6 months</p><img src={down} className="size-4 pt-2 mr-6"/></div>
            </div>
            <Line data={chartData} options={chartOptions} />
        </div>
        <div className="w-1/3 ml-5">
            <div className="flex">
                <div className="bg-pink-400 rounded-[100px] size-4 mx-2 my-1">
                    
                </div>
                <p className="font-semibold">Systolic</p>
            </div>
            <p className="text-2xl font-semibold ml-2 my-2">160</p>
            <div className="flex">
                <img src={upp} className="mx-2" />
                <p>Higher than Average</p>
            </div>

            <hr className=" my-3" />

            <div className="flex">
                <div className="bg-purple-500 rounded-[100px] size-4 mx-2 my-1">
                    
                </div>
                <p className="font-semibold">Diastolic</p>
            </div>
            <p className="text-2xl font-semibold ml-2 my-2">78</p>
            <div className="flex">
                <img src={downn} className="mx-2" />
                <p>Lower than Average</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default BP
