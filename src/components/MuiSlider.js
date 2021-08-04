import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core";

const CustomRange = withStyles(() => ({
  thumb: {
    height: 28,
    width: 28,
    marginTop: -14,
    marginLeft: -14,
    boxShadow: "none",
    "&:focus, &:hover, &$active": {
      boxShadow: "none",
    },
  },
}))(Slider);

function valuetext(value) {
  return `${value}h`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([0, 24]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <CustomRange
      value={value}
      onChange={handleChange}
      defaultValue={0}
      aria-labelledby="discrete-slider-small-steps"
      step={1}
      marks={false}
      min={0}
      max={24}
      valueLabelDisplay="on"
      style={{ width: "200px", color: "#10beb8" }}
      valueLabelFormat={(value) => (
        <div className={"slidervalue"}>{valuetext(value)}</div>
      )}
      getAriaValueText={valuetext}
    />
  );
}
