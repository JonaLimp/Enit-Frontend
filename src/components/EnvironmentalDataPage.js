import React from 'react';
import { useParams } from 'react-router-dom'; // Hook to get route parameters

const EnvironmentalDataPage = () => {
  const { country } = useParams(); // Extract the country parameter from the URL

  return (
    <div>
      <h1>Environmental Data for {country}</h1>
      {/* Add environmental data fetching and display logic here */}
    </div>
  );
};

export default EnvironmentalDataPage;
