import React from "react";

const CountrySelector = ({ countries, selectedCountry, onChange }) => {
  return (
    <div>
      <label htmlFor="country">Select Country: </label>
      <select id="country" value={selectedCountry} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
