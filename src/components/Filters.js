import React from "react";
import "../assets/styles/components/Filters.scss";
import {
  HumidityIconb,
  PollutionIconb,
  TemperatureIconb,
  CheckMark,
} from "../assets/icons";
import { RangeSlider } from "./index";

const Filters = () => {
  return (
    <div className="filterwrapper">
      <form id="carform" />
      <div className="section">
        <label>DATE</label>
        <input
          type="date"
          className="inputselect"
          name="cars"
          id="cars"
          form="carform"
        />
      </div>
      <div className="section">
        <label>RANGE</label>
        <select className="inputselect" name="cars" id="cars" form="carform">
          <option value="volvo">Infinite</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="section">
        <label>HOURS</label>
        <div className="slidecontainer">
          <RangeSlider />
        </div>
      </div>
      <div className="section">
        <label>DATA TYPE</label>
        <div className="images">
          <div className="absolutepic">
            <TemperatureIconb />
          </div>
          <div className="absolutepic">
            <HumidityIconb />
          </div>
          <div className="absolutepic2">
            <PollutionIconb />
          </div>
        </div>
      </div>
      <div className="checkcontainer">
        <CheckMark />
      </div>
    </div>
  );
};
export default Filters;
