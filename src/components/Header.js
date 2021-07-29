import React from "react";
import "../assets/styles/components/Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <span className="accent">Air</span>vironment
      </Link>
      <ul>
        <li>
          <Link to="/avg">All Data</Link>
        </li>
        <li>
          <a href="/">Averages</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
