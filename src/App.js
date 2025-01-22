// App.js
import React from 'react';
import StartPage from './components/StartPage';  
import EnvironmentalDataPage from './components/EnvironmentalDataPage';  
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
          {/* Define routes */}
          <Route path="/" element={<StartPage />} /> {/* Main page with dropdown */}
          <Route path="*" element={<NotFound />} />
          <Route path="/environmental-data/:country" element={<EnvironmentalDataPage />} /> {/* Environmental data page */}
        </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
