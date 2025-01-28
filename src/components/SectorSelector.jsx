import React from "react";

const SectorSelector = ({ sectors, selectedSector, onChange }) => {
  return (
    <div>
      <label htmlFor="sector">Select Sector: </label>
      <select id="sector" value={selectedSector} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select a sector</option>
        {sectors.map((sector) => (
          <option key={sector} value={sector}>
            {sector}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SectorSelector;
