import React, { useEffect, useState } from "react";
import AverageCard from "../components/averageCard";
import "../assets/styles/components/averageCard.scss";
const AverageMes = () => {
  const [fetchData, setData] = useState({});
  useEffect(() => {
    fetch("https://airvironment.dev/api/measurements")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log(fetchData);
  return (
    <div className="renderDiv">
      {fetchData.response?.length &&
        fetchData.response.map((response) => {
          return fetchData.response ? (
            <AverageCard fetchData={response} />
          ) : (
            <div></div>
          );
        })}
    </div>
  );
};
export default AverageMes;
