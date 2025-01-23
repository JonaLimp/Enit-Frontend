import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style.css'; 


const StartPage = () => {
  const [countries, setCountries] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [selectedCountry, setSelectedCountry] = useState(''); 
  const navigate = useNavigate(); 

  useEffect(() => {
    // Fetch countries from the backend
    axios
      .get('http://127.0.0.1:8000/environmental_data/api/countries/')
      .then((response) => {
        setCountries(response.data);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, []); // Empty dependency array ensures this runs only once

  // Handle dropdown selection
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  // Define the handleSubmit function
  const handleSubmit = () => {
    if (selectedCountry) {
      navigate(`/environmental-data/${selectedCountry}`); // Navigate to the environmental data page
    } else {
      console.error('No country selected');
    }
  };

  return (
    <div>
      <h1>Select a Country</h1>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">-- Select a Country --</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      {selectedCountry && <p>You selected: {selectedCountry}</p>}
      <button onClick={handleSubmit} disabled={!selectedCountry}>
        View Environmental Data
      </button>
    </div>
  );
};

export default StartPage;
