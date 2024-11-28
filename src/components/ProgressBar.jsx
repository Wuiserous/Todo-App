import React, { useState, useEffect } from "react";

export default function ProgressBar(props) {
  const [progress, setProgress] = useState(0);
  const [isRed, setIsRed] = useState(false); // State to control the red transition
  const [timeLeft, setTimeLeft] = useState(""); // State to store the time left

  const color = props.color;

  const width = props.isExpanded ? '434px' : '313px';

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
  
      // Parse props.createdTime (ISO format) into a Date object
      const createdTime = new Date(props.createdTime);
  
      // Parse props.deadLine (ISO format) into a Date object
      const deadline = new Date(props.deadLine);
  
      // Calculate total time and time passed in milliseconds
      const totalTime = deadline.getTime() - createdTime.getTime();
      const timePassed = currentTime.getTime() - createdTime.getTime();
  
      // Calculate the progress percentage
      const newProgress = Math.min((timePassed / totalTime) * 100, 100); // Clamp progress to 100%
      setProgress(newProgress);
  
      // Handle red transition for progress from 91-100%
      if (newProgress >= 91 && newProgress < 100 && !isRed) {
        setIsRed(true); // Turn red when progress is between 91-99%
      } else if (newProgress === 100 && isRed) {
        setIsRed(false); // After hitting 100%, turn blue
      }
  
      // Calculate time left
      const remainingTime = deadline.getTime() - currentTime.getTime();
  
      if (remainingTime <= 0) {
        setTimeLeft("0 minutes"); // No time left
      } else {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  
        if (days > 0) {
          setTimeLeft(`${days} day${days > 1 ? "s" : ""} left`);
        } else if (hours > 0) {
          setTimeLeft(`${hours} hour${hours > 1 ? "s" : ""} left`);
        } else {
          setTimeLeft(`${minutes} minute${minutes > 1 ? "s" : ""} left`);
        }
      }
    }, 1000); // Update every second
  
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [props.createdTime, props.deadLine, isRed]);
  

  // Dynamically determine the color based on progress
  const getColor = () => {
    if (isRed) return "red"; // If in red transition (91-100%)
    if (progress <= 50) return color; // 0-50%: Blue
    if (progress <= 75) return "yellow"; // 51-75%: Yellow
    if (progress <= 90) return "orange"; // 76-90%: Orange
    return color; // After 100%, revert back to blue
  };

  const getBorderRadius = () => {
    // If progress is between 97% and 100%, gradually increase the rounding
    if (progress >= 95) {
      // Interpolate border-radius from 0px to 9px as the progress goes from 97% to 100%
      const radius = (progress - 95) * (9 / 5); // Max radius of 9px when progress is 100%
      return `0px 0px ${radius}px 0px`;
    }
    return '0px'; // No rounding when progress is less than 97%
  };
  

  return (
    <div style={{ width: '100%', display: "flex", flexDirection: "column" }}>
      <p style={{ fontSize: "10px", color: "white", opacity: "0.75", position: "absolute", right: "1px", top: "-13px" }}>
        {progress.toFixed(0)}% {timeLeft}
      </p>
      <div
        style={{
          height: "9px",
          borderRadius: getBorderRadius(),
          width: `${progress}%`,
          backgroundColor: getColor(),
          transition: "width 0.5s, background-color 0.5s",
        }}
      ></div>
    </div>
  );
}
