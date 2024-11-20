import { useState, useEffect } from "react";
import data from "../assets/Jessica.json";
import resp from "../assets/resp.svg"
import temp from "../assets/temp.svg"
import heart from "../assets/heart.svg"

const RTH = () => {

  const [lastMonthData, setLastMonthData] = useState(null);

  useEffect(() => {
    const getLastMonthData = () => {
      const currentDate = new Date();
      // Calculate last month and year
      const lastMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 8
      );
      const lastMonth = lastMonthDate.toLocaleString("default", {
        month: "long",
      });
      const lastYear = lastMonthDate.getFullYear();
  
      // Find the corresponding entry
      const monthData = data.diagnosis_history.find(
        (entry) => entry.month === lastMonth && entry.year === lastYear
      );
  
      setLastMonthData(monthData || null);
    };
  
    getLastMonthData();
  }, []);

  return (
    <div style={{paddingTop:'15px', fontFamily: "Arial, sans-serif" }}>
      {lastMonthData ? (
        <div className="flex">
          <div className="bg-[#E0F3FA] rounded-[12px] text-left p-4 mr-4 w-1/3">
            <img src={resp} className="h-[10vh]" />
            <p className="mt-3">Respiratory Rate</p>
            <p className="text-2xl font-semibold mb-3">{lastMonthData.respiratory_rate.value} bpm</p>
            {lastMonthData.respiratory_rate.levels}
          </div>
          <div className="bg-[#FFE6E9] rounded-[12px] text-left p-4 mr-4 w-1/3">
            <img src={temp} className="h-[10vh]" />
            <p className="mt-3">Temperature</p>
            <p className="text-2xl font-semibold mb-3">{lastMonthData.temperature.value} °F</p>
            {lastMonthData.temperature.levels}
          </div>
          <div className="bg-[#FFE6F1] rounded-[12px] text-left p-4 w-1/3">
            <img src={heart} className="h-[10vh]" />
            <p className="mt-3">Respiratory Rate</p>
            <p className="text-2xl font-semibold mb-3">{lastMonthData.heart_rate.value} bpm</p>
            {lastMonthData.heart_rate.levels}
          </div>
        </div>
      ) : (
        <p>No data available for the last month.</p>
      )}
    </div>
  );
  };
  
  export default RTH;
  