import React from "react";
import AverageCard from "../components/averageCard";
import "../assets/styles/components/averageCard.scss";
const averageMes = () => {
  const cardnumber = 15;
  let responseArray = [];
  let renderList = [];

  for (let i = 0; i < cardnumber; i++) {
    renderList.push(i);
  }
  return (
    <div className="renderDiv">
      {renderList.map(() => {
        return <AverageCard temperature={"3°"} />;
      })}
    </div>
  );
};
export default averageMes;
