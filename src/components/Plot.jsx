import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Plot = ({ selectedCountry, selectedSector }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedCountry || !selectedSector) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/environmental-data/api/historical-environmental-data?country=${selectedCountry}&sector=${selectedSector}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        console.log("Fetched data for chart:", jsonData); // Debugging
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [selectedCountry, selectedSector]);

  if (!data) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("Fetched data for chart:", data);

  // Transform data for chart
  const labels = Object.keys(data[selectedCountry][selectedSector]); // Years
  const values = Object.values(data[selectedCountry][selectedSector]); // Emission values

  console.log("Labels:", labels);
  console.log("Values:", values);

  const chartData = {
    labels,
    datasets: [
      {
        label: `${selectedSector} in ${selectedCountry}`,
        data: values,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Environmental Data for ${selectedCountry}`,
      },
    },
  };

  return (
    <div>
      <h2>Environmental Data Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Plot;
