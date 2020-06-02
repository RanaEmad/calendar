import React from "react";
import Day from "../Day/Day";

function Month() {
  return (
    <div className="month">
      <div className="heading">June</div>
      <div className="days">
        <Day />
      </div>
    </div>
  );
}

export default Month;
