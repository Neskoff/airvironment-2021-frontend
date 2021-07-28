import React from "react";
import "../assets/styles/components/Header.scss";
const Header = () => {
  return (
    <div className="header">
      <span className="accent">Air</span>vironment
      <ul>
        <li>
          <a href="#">All Data</a>
        </li>
        <li>
          <a href="#">Averages</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
