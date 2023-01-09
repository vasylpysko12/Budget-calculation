import React from "react";
import "./App.css";
import Home from "../Home/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"
import About from "../About/About";
import Statistics from "../Statistics/Statistics";
import Settings from "../Settings/Settings";

export const ThemeContext = React.createContext("light");

const App = function() {
  const [theme, setTheme] = React.useState("light")
  const toggleTheme = () =>{
    setTheme((curr)=>(curr === "light"?"dark":"light"))
  }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div className="app" id={theme}>
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
            <ThemeSwitch toggleTheme={toggleTheme} theme={theme}/>
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
    </ThemeContext.Provider>
  );
};
export default App;
