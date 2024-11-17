import React, { useState, useEffect } from "react";

export default function ProgressBar(props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();

      // Parse props.createdTime (ISO format) into a Date object
      const createdTime = new Date(props.createdTime);

      // Combine props.deadlineDate and props.deadlineTime into a Date object
      const deadline = new Date(`${props.deadlineDate} ${props.deadlineTime}`);

      // Calculate total time and time passed in milliseconds
      const totalTime = deadline.getTime() - createdTime.getTime();
      const timePassed = currentTime.getTime() - createdTime.getTime();

      // Calculate the progress percentage
      const newProgress = Math.min((timePassed / totalTime) * 100, 100); // Clamp progress to 100%
      setProgress(newProgress);
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [props.createdTime, props.deadlineDate, props.deadlineTime]);

  // Dynamically determine the color based on progress
  const getColor = () => {
    if (progress <= 50) return "blue"; // 0-50%: Blue
    if (progress <= 75) return "yellow"; // 51-75%: Yellow
    if (progress <= 90) return "orange"; // 76-90%: Orange
    return "red"; // 91-100%: Red
  };

  return (
    <div style={{ width: "300px", margin: "20px 0" }}>
      <div
        style={{
          height: "5px",
          width: `${progress}%`,
          backgroundColor: getColor(),
          transition: "width 0.5s, background-color 0.5s",
          borderRadius: "5px",
          
        }}
      ></div>
      <p style={{ marginTop: "10px", textAlign: "center" }}>
        {progress.toFixed(2)}% Time Passed
      </p>
    </div>
  );
}
