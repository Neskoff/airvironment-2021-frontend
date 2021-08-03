import React from "react";
import moment from "moment";

const AllDataCardRow = ({ response }) => {
  return (
    <>
      <div className="date-time-wrapper">
        {moment(response.created.substr(0, 19)).format("HH")}h
      </div>
      <div className="values">{Math.round(response.temperature)}&deg;C</div>
      <div className="values">{Math.round(response.humidity)}%</div>
      <div className="values">{Math.round(response.pollution) / 100}ppb</div>
    </>
  );
};

export default AllDataCardRow;
