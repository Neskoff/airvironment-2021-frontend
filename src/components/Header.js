import React from "react";
import "../assets/styles/components/Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link path="/">
        <span className="accent">Air</span>vironment
      </Link>
      <ul>
        <li>
          <a href="/">All Data</a>
        </li>
        <li>
          <a href="/">Averages</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
