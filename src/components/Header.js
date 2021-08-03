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
          <Link to="/all">All Data</Link>
        </li>
        <li>
          <Link to="/avg">Averages</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
