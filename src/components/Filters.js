import React, { useState } from "react";
import "../assets/styles/components/Filters.scss";
import {
  HumidityIconb,
  PollutionIconb,
  TemperatureIconb,
  CheckMark,
  Cross,
} from "../assets/icons";
import { RangeSlider } from "./index";
import moment from "moment";
const callback = {
  temperature_from: null,
  date_from: null,
  per_page: 300,
};
const Filters = ({ onEventclick }) => {
  const [rotation, setRotation] = useState(90);
  const [isTemp, setTemp] = useState(false);
  const [isHum, setHum] = useState(false);
  const [isPol, setPol] = useState(true);
  const [isClosed, setClosed] = useState(false);
  const [rangeValue, setRange] = useState([]);
  const getRange = (parentRange) => {
    setRange(parentRange);
  };
  let date = moment().startOf("day");
  let todayDate = date.toISOString().substr(0, 10);
  const addDays = (odate, days) => {
    let date = new Date(odate);
    let add = date.getDate();
    date.setDate(parseInt(add) + parseInt(days));
    console.log(date);
    return date;
  };
  return (
    <>
      <div className="filterwrapper" id="wrapfilter">
        <form id="carform" />
        <div className="resp1">
          <div className="section">
            <label>DATE</label>
            <input
              type="date"
              className="inputselect"
              name="cars"
              id="datefilter"
              form="carform"
              max={todayDate}
            />
          </div>
          <div className="section">
            <label>RANGE</label>
            <select
              className="inputselect"
              name="cars"
              id="rangefilter"
              form="carform"
            >
              <option value="infinite">Infinite</option>
              <option value="1">1 Day</option>
              <option value="7">7 Days</option>
              <option value="30">Month</option>
            </select>
          </div>
        </div>
        <div className="section">
          <label>HOURS</label>
          <div className="slidecontainer">
            <RangeSlider getRange={getRange} />
          </div>
        </div>
        <div className="section">
          <label>DATA TYPE</label>
          <div className="images">
            <div
              id="tempicon"
              className="absolutepic"
              onClick={() => {
                console.log(document.documentURI);
                setTemp(!isTemp);
                if (!isTemp) {
                  document.getElementById("tempicon").style.background =
                    'url("https://svgur.com/i/Zq0.svg") no-repeat scroll right bottom';
                  document.getElementById("tempicon").style.opacity = "1";
                } else {
                  document.getElementById("tempicon").style.background =
                    'url("https://svgur.com/i/Zov.svg") no-repeat scroll right bottom';
                  document.getElementById("tempicon").style.opacity = "0.5";
                }
              }}
            >
              <TemperatureIconb />
            </div>
            <div
              id="humicon"
              className="absolutepic"
              onClick={() => {
                console.log(document.documentURI);
                setHum(!isHum);
                if (!isHum) {
                  document.getElementById("humicon").style.background =
                    'url("https://svgur.com/i/Zq0.svg") no-repeat scroll right bottom';
                  document.getElementById("humicon").style.opacity = "1";
                } else {
                  document.getElementById("humicon").style.background =
                    'url("https://svgur.com/i/Zov.svg") no-repeat scroll right bottom';
                  document.getElementById("humicon").style.opacity = "0.5";
                }
              }}
            >
              <HumidityIconb />
            </div>
            <div
              className="absolutepic2"
              id="policon"
              onClick={() => {
                console.log(document.documentURI);
                setPol(!isPol);
                if (!isPol) {
                  document.getElementById("policon").style.background =
                    'url("https://svgur.com/i/Zq0.svg") no-repeat scroll right bottom';
                  document.getElementById("policon").style.opacity = "1";
                } else {
                  document.getElementById("policon").style.background =
                    'url("https://svgur.com/i/Zov.svg") no-repeat scroll right bottom';
                  document.getElementById("policon").style.opacity = "0.5";
                }
              }}
            >
              <PollutionIconb />
            </div>
          </div>
        </div>
        <div
          className="checkcontainer"
          onClick={() => {
            callback.temperature_from = 19;

            const originaldate = document.getElementById("datefilter").value;
            const date2 = document.getElementById("datefilter").value;
            callback.date_from = moment(originaldate).toISOString();

            const days = document.getElementById("rangefilter").value;
            if (days !== "infinite") {
              callback.date_to = addDays(date2, days).toISOString();
            }
            onEventclick(callback);
          }}
        >
          <CheckMark />
        </div>
      </div>
      <div
        className="closecontainer"
        onClick={() => {
          setRotation(rotation + 45);
          setClosed(!isClosed);
          document.getElementById("cross").style.transform =
            "rotate(" + rotation + "deg)";
          if (!isClosed) {
            document.getElementById("wrapfilter").style.maxHeight = "0px";
          } else {
            document.getElementById("wrapfilter").style.maxHeight = "500px";
          }
        }}
      >
        <Cross classname="cross" />
      </div>
    </>
  );
};

export default Filters;
