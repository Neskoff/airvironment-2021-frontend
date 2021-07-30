import React from "react";
import "../assets/styles/components/averageCard.scss";
import { upArrow, downArrow } from "../assets/icons";
import moment from "moment";
const AverageCard = ({ fetchData }) => {
  return (
    <div className="wrapper">
      <div className="cardTitle">
        {" "}
        {moment(fetchData.date, "DD.M.YYYY").format("ddd")}
      </div>
      <div className="cardSubtitle">
        {" "}
        {moment(fetchData.date, "DD.M.YYYY").format("DD. MMM. YYYY.")}
      </div>
      <hr color="#ffffff" width="80%" />
      <div className="mainArea">
        <div className="imageArea">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              id="temp_ico"
              data-name="temp ico"
              transform="translate(-75 -215)"
            >
              <rect
                id="Rectangle_7"
                data-name="Rectangle 7"
                width="24"
                height="24"
                transform="translate(75 215)"
                fill="none"
              />
              <path
                id="Path_17"
                data-name="Path 17"
                d="M94,91.257V83.5a3.5,3.5,0,0,0-7,0v7.757a5.5,5.5,0,1,0,7,0ZM90.5,99a3.5,3.5,0,0,1-2.227-6.2L89,92.2V83.5a1.5,1.5,0,0,1,3,0v8.7l.727.6A3.5,3.5,0,0,1,90.5,99Zm.5-5.95V88H90v5.05a2.5,2.5,0,1,0,1,0Z"
                transform="translate(-3.5 136.5)"
                fill="#fff"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g id="hum_ico" data-name="hum ico" transform="translate(-75 -161)">
              <rect
                id="Rectangle_6"
                data-name="Rectangle 6"
                width="24"
                height="24"
                transform="translate(75 161)"
                fill="none"
              />
              <path
                id="Path_20"
                data-name="Path 20"
                d="M156,153c0-4,6-12,6-12s6,8,6,12a6,6,0,0,1-12,0Zm2,0a4,4,0,1,0,8,0c0-1.8-2.011-5.5-4-8.517C160.011,147.5,158,151.2,158,153Zm1.5,1.5a1,1,0,1,1,1,1A1,1,0,0,1,159.5,154.5Zm5.187-11.4A43.671,43.671,0,0,1,168,138s5,6.5,5,10a5,5,0,0,1-4,4.9C168.94,150.089,166.5,145.869,164.687,143.1Z"
                transform="translate(-77.5 24.5)"
                fill="#fff"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g id="pol_ico" data-name="pol ico" transform="translate(-75 -269)">
              <path
                id="Path_13"
                data-name="Path 13"
                d="M14,85a1.5,1.5,0,0,0,1.408-1H18a1,1,0,0,0,2,0h2.889a1.483,1.483,0,0,0,2.221,0H26a3,3,0,1,0-2.832-3.983c-.056,0-.11-.017-.168-.017a2,2,0,0,0-2,2H14a1.5,1.5,0,0,0,0,3Zm11,1H23v2.667L20,89.5V86H18v4.055l-3,.834V86H13v5.445L11,92v7H29V87l-4,1.111Zm2,3.632V97H13V93.52Z"
                transform="translate(67 192.5)"
                fill="#fff"
              />
              <rect
                id="Rectangle_8"
                data-name="Rectangle 8"
                width="24"
                height="24"
                transform="translate(75 269)"
                fill="none"
              />
            </g>
          </svg>
        </div>
        <div className="textAreaLeft">
          <p>
            <span>
              {upArrow()} {fetchData.maxTemperature}Cº
            </span>
          </p>
          <p>
            <span>
              {downArrow()} {fetchData.minTemperature}Cº
            </span>
          </p>
          <div className="break"></div>
          <p>
            <span>
              {upArrow()} {fetchData.maxPollution}%
            </span>
          </p>
          <p>
            {" "}
            <span>
              {downArrow()} {fetchData.minPollution}%
            </span>
          </p>
          <div className="breakTwice"></div>
          <p>
            {" "}
            <span>
              {upArrow()} {fetchData.maxPollution}ppb
            </span>
          </p>
          <p>
            {" "}
            <span>
              {downArrow()} {fetchData.minPollution}ppb
            </span>
          </p>
        </div>
        <div className="mesArea">
          <p className="data">/ {fetchData.averageTemperature}º</p>
          <p className="data">/ {fetchData.averageHumidity}%</p>
          <p className="pollution">
            / {fetchData.averagePollution} <sub className="shift"> ppb</sub>
          </p>
        </div>
      </div>
    </div>
  );
};
export default AverageCard;
