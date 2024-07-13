import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './component/HomePage';
import FavoritesPage from './component/FavoritesPage';
import EmployeeDetails from './component/EmployeeDetails';
import { EmployeeProvider } from './context/EmployeeContext';
import './App.css';
const App = () => {
  return (
    <EmployeeProvider>
      <Router>
        <div className="navbar">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/favorites">Favorites</Link>
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/employee/:id" element={<EmployeeDetails />} />
          </Routes>
        </div>
      </Router>
    </EmployeeProvider>
  );
}

export default App;