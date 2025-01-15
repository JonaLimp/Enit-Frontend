import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style.css'; 

const StartPage = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/environmental_data/api/countries/')
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      setLoading(true);
      axios
        .get(`http://127.0.0.1:8000/environmental_data/api/historical-data/${selectedCountry}/`)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [selectedCountry]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="container">
      <h2>Select a Country</h2>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">-- Choose a Country --</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.region.name} - {item.substance.name} ({item.year}): {item.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StartPage;
