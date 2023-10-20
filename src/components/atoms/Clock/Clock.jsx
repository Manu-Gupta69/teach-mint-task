import React, { useEffect, useRef, useState } from "react";
import "./Clock.scss";
import Button from "../Button/Button";

const Clock = ({ timeData }) => {
  const timerId = useRef(null);
  const [clockTime, setClockTime] = useState(timeData);
  const [start, setStart] = useState(true);

  const timer = () => {
    setClockTime((prev) => {
      if (prev.sec < 59) {
        return { ...prev, sec: prev.sec + 1 };
      } else if (prev.min < 59 && prev.sec == 59) {
        return { ...prev, min: prev.min + 1, sec: 0 };
      } else if (prev.hour < 23 && prev.min == 59) {
        return {
          hour: prev.hour + 1,
          min: 0,
          sec: 0,
        };
      } else {
        return { hour: 0, min: 0, sec: 0 };
      }
    });
  };

  const startBtnHandler = () => {
    if (timerId.current) return;
    setStart(true);
    timerId.current = setInterval(() => {
      timer();
    }, 1000);
  };

  const stopBtnHandler = () => {
    clearInterval(timerId.current);
    timerId.current = null;
    setStart(false);
  };

  useEffect(() => {
    startBtnHandler();
    return () => stopBtnHandler();
  }, []);

  return (
    <div className="clock-parent">
      <div className="clock-container">
        <h1>{`${clockTime.hour < 10 ? "0" : ""}${clockTime.hour}`}:</h1>
        <h1>{`${clockTime.min < 10 ? "0" : ""}${clockTime.min}`}:</h1>
        <h1>{`${clockTime.sec < 10 ? "0" : ""}${clockTime.sec}`}</h1>
      </div>
      <div className="btn-container">
        <Button
          title={"Start"}
          onBtnClick={startBtnHandler}
          style={{ backgroundColor: start ? "grey" : "#5CFF5C" }}
        />
        <Button
          title={"Pause"}
          onBtnClick={stopBtnHandler}
          style={{ backgroundColor: start ? "#FF4500" : "grey" }}
        />
      </div>
    </div>
  );
};

export default Clock;
