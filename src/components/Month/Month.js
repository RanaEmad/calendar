import React from "react";
import "./Month.css";
import Day from "../Day/Day";

function Month() {
  let days = [];
  const currentDate = new Date();
  const daysOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  for (let i = 1; i <= daysOfMonth; i++) {
    let weekDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      i
    ).getDay();
    days.push(<Day key={"day" + i} date={i} weekDay={weekDay} />);
  }

  return (
    <div className="month">
      <div className="heading">June</div>
      <div className="days">{days}</div>
    </div>
  );
}

export default Month;
