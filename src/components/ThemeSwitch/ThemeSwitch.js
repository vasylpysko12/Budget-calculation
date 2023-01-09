import React from "react";
import "../App/App.css";
const ThemeSwitch = ({ toggleTheme, theme }) => {
  return (
      <div className="form-check form-switch  themeSwitch" > 
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onChange={toggleTheme}
        />
        <label className="form-check-label lab">{theme==="light"?'Light Mode':'Dark Mode'}</label>
      </div>
  );
};

export default ThemeSwitch;
