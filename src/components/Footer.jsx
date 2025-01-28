import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Environmental Dashboard. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  marginTop: '20px'
};

export default Footer;