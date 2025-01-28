import React from 'react';
import useLogic from '../hooks/useLogic';
import Plot from './Plot';

const EnvironmentalDataPage = () => {
  const {
    countries,
    sectors,
    data,
    selectedCountry,
    selectedSector,
    handleCountryChange,
    handleSectorChange,
    loading,
    error,
  } = useLogic();

  return (
    <div>
      <h1>Environmental Data Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          {/* Country Dropdown */}
          <div>
            <label htmlFor="country">Select a Country:</label>
            <select
              id="country"
              value={selectedCountry}
              onChange={(e) => handleCountryChange(e.target.value)}
            >
              <option value="">-- Select a Country --</option>
              {countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sector Dropdown */}
          <div>
            <label htmlFor="sector">Select a Sector:</label>
            <select
              id="sector"
              value={selectedSector}
              onChange={(e) => handleSectorChange(e.target.value)}
            >
              <option value="">-- Select a Sector --</option>
              {sectors.map((sector, index) => (
                <option key={index} value={sector.name}>
                  {sector.name}
                </option>
              ))}
            </select>
          </div>

          Plot Component
          {selectedCountry && selectedSector && (
            <Plot
              data={data}
              selectedCountry={selectedCountry}
              selectedSector={selectedSector}
            />
          )}
        </>
      )}
    </div>
  );
};

export default EnvironmentalDataPage;
