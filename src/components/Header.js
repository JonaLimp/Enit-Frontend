import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Environmental Data Dashboard</h1>
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center'
};

export default Header;