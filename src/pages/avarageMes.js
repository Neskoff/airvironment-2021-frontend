import React, { useEffect } from "react";
import AverageCard from "../components/averageCard";
import "../assets/styles/components/averageCard.scss";
import { loadAverageValues } from "../redux/actions/averageActions";
import { connect } from "react-redux";

const AverageMes = ({ averageValues, getAverageValues }) => {
  useEffect(() => {
    const params = {
      all: true,
    };
    getAverageValues(params);
  }, [getAverageValues, averageValues]);
  return (
    <div className="renderDiv">
      {averageValues?.length &&
        averageValues.map((response) => {
          return averageValues ? (
            <AverageCard fetchData={response} key={response.date} />
          ) : (
            <div> </div>
          );
        })}
    </div>
  );
};
function mapStateToProps(state) {
  return {
    averageValues: state.averageValues ? state.averageValues : [],
  };
}
const mapDispatchToProps = {
  getAverageValues: loadAverageValues,
};
export default connect(mapStateToProps, mapDispatchToProps)(AverageMes);
