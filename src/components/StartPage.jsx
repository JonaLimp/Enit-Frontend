import React from 'react';
import { useNavigate } from 'react-router-dom';
// import '../style.css';

const StartPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/environmental-data'); // Navigate directly to EnvironmentalDataPage
  };

  return (
    <div>
      <h1>Welcome to the Environmental Data Tracker</h1>
      <button onClick={handleNavigate}>Go to Environmental Data</button>
    </div>
  );
};

export default StartPage;
