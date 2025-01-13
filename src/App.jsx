import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="app-wrapper min-h-screen overflow-x-hidden">
      <div className="gradient-layer">
  <div className="gradient-background"></div>
  <div className="gradient-background outer"></div>
</div>

      <BrowserRouter>
        <Navbar />
        <div className="content-container relative z-10">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
