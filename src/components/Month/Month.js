import React from "react";
import "./Month.css";
import Day from "../Day/Day";

let months = [];
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";

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

    let today = "";
    if (i === currentDate.getDate()) {
      today = " today ";
    }

    days.push(<Day key={"day" + i} date={i} weekDay={weekDay} today={today} />);
  }

  return (
    <div className="month">
      <div className="heading">{months[currentDate.getMonth()]}</div>
      <div className="days">{days}</div>
    </div>
  );
}

export default Month;
