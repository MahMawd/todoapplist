// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { AboutUs } from './components/AboutUs';
import { TodoWrapperLocalStorage } from './components/TodoWrapperLocalStorage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<TodoWrapperLocalStorage />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
