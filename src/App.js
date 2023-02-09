import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Details from './Components/DetailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/country/:country" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
