import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../assets/styles/pages/AllData.scss";
import useDates from "../hooks/useDates";
import AllDataCard from "../components/AllDataCard";
import { loadMeasurements } from "../redux/actions/loadMeasurements";

const AllData = ({ getMeasurements, measurements }) => {
  const { isSameDay } = useDates();
  const [dataArray, setDataArray] = useState([]);
  const per_page = 5000;

  useEffect(() => {
    const params = {
      per_page: per_page,
    };
    getMeasurements(params);
  }, [getMeasurements]);

  useEffect(() => {
    function groupArray(array) {
      const groupedArray = [];
      let currentGroup = [];
      array.forEach((data, index) => {
        currentGroup.push(data);
        if (
          (index < array.length - 1 &&
            !isSameDay(data.created, array[index + 1].created)) ||
          index === array.length - 1
        ) {
          groupedArray.push(currentGroup);
          currentGroup = [];
        }
      });
      setDataArray(groupedArray);
    }
    groupArray(measurements);
  }, [measurements, isSameDay]);
  console.log(dataArray);

  return (
    <div className="all-data-container">
      {dataArray?.length &&
        dataArray.map((response) => {
          return dataArray ? (
            <AllDataCard fetchData={response} />
          ) : (
            <div> </div>
          );
        })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    measurements: state.measurements.response ?? [],
  };
}

const mapDispatchToProps = {
  getMeasurements: loadMeasurements,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllData);