import React from "react";
import "./Day.css";

let week = [];
week[0] = "Sunday";
week[1] = "Monday";
week[2] = "Tuesday";
week[3] = "Wednesday";
week[4] = "Thursday";
week[5] = "Friday";
week[6] = "Saturday";

function Day(props) {
  return (
    <div className={"day " + week[props.weekDay].toLowerCase()}>
      <div className="date">{props.date}</div>
      <div className="weekday">{week[props.weekDay]}</div>
    </div>
  );
}

export default Day;
