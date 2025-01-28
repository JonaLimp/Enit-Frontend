import { useState, useEffect } from 'react';
import axios from 'axios';

const useLogic = () => {
  // States for dropdown data
  const [countries, setCountries] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [data, setData] = useState([]);

  // States for selected values
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedSector, setSelectedSector] = useState('');

  // States for loading and error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch countries and sectors on component mount
  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        setLoading(true);
        const [countriesResponse, sectorsResponse] = await Promise.all([
          axios.get('http://127.0.0.1:8000/environmental-data/api/countries/'),
          axios.get('http://127.0.0.1:8000/environmental-data/api/sectors/'),
        ]);
        setCountries(countriesResponse.data);
        setSectors(sectorsResponse.data);
      } catch (err) {
        setError('Failed to load dropdown data.');
      } finally {
        setLoading(false);
      }
    };

    fetchDropdownData();
  }, []);

  // Fetch environmental data when country and sector are selected
  useEffect(() => {
    if (!selectedCountry || !selectedSector) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'http://127.0.0.1:8000/environmental-data/api/historical-environmental-data/',
          {
            params: {
              country: selectedCountry,
              sector: selectedSector,
            },
          }
        );
        setData(response.data);
      } catch (err) {
        setError('Failed to load environmental data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCountry, selectedSector]);

  // Handlers to update selected values
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handleSectorChange = (sector) => {
    setSelectedSector(sector);
  };

  return {
    countries,
    sectors,
    data,
    selectedCountry,
    selectedSector,
    handleCountryChange,
    handleSectorChange,
    loading,
    error,
  };
};

export default useLogic;
