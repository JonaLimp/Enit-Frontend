import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../style.css'; 


const EnvironmentalDataPage = () => {
  const { country } = useParams(); 
  const [loading, setLoading] = useState(true); 
  const [sectors, setSectors] = useState([]); 
  const [selectedSectors, setSelectedSectors] = useState(''); 

    // // Define the handleSubmit function
    // const handleSubmit = () => {
    //   if (selectedCountry) {
    //     navigate(`/environmental-data/${selectedSector}`); 
    //   } else {
    //     console.error('No country selected');
    //   }
    // };

  useEffect(() => {
    // Fetch sectors from the backend
    axios
      .get('http://127.0.0.1:8000/environmental_data/api/sectors/')
      .then((response) => {
        setSectors(response.data);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, []); 

    // Handle dropdown selection
    const handleSectorChange = (e) => {
      setSelectedSectors(e.target.value);
    };
  

  return (
    <div>
      <h1>Environmental Data for {country}</h1>
      
        <h1>Select a sector:</h1>
        <select value={selectedSectors} onChange={handleSectorChange}>
          <option value="">Select a sector</option>
          {sectors.map((sector, index) => (
            <option key={index} value={sector.name}>
              {sector.name}
            </option>
          ))} 
        </select>
      
    </div>
  );
};

export default EnvironmentalDataPage;
