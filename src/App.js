// App.js
import React from 'react';
import StartPage from './components/StartPage';  // Correctly import from components folder
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Header />
      <StartPage />  {/* Render the StartPage component */}
      <Footer />
    </div>
  );
}

export default App;
