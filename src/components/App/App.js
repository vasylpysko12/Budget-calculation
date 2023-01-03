import React from 'react';
import './App.css';
import Home from '../Home/Home';
import {BrowserRouter as Router, Route, Link,  Routes} from 'react-router-dom';


import About from '../About/About';
import Statistics from '../Statistics/Statistics';
import Settings from '../Settings/Settings';
const App = function(){
  
  return (
    <div className='app'>
      <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} /> 
        <Route path="/statistics" element={<Statistics />} /> 
        <Route path="/" element={<Home />} /> 
        <Route path="/settings" element={<Settings />} /> 
      </Routes>
    </Router>
    </div>
    
  )
   
   
  
}
export default App;
