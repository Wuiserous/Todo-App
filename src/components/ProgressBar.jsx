import React, { useEffect, useState } from "react";

export default function ProgressBar(props) {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(""); // State to store the time left

  const color = props.color // Default to blue if no color is provided

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const createdTime = new Date(props.createdTime);
      const deadline = new Date(props.deadLine);

      const totalTime = deadline.getTime() - createdTime.getTime();
      const timePassed = currentTime.getTime() - createdTime.getTime();

      const newProgress = Math.min((timePassed / totalTime) * 100, 100);
      setProgress(newProgress);

      const remainingTime = deadline.getTime() - currentTime.getTime();

      if (remainingTime <= 0) {
        setTimeLeft("0 minutes");
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
    }, 1000);
    return () => clearInterval(interval);
  }, [props.createdTime, props.deadLine]);

  const interpolateColor = (startColor, endColor, factor) => {
    const interpolate = (start, end) => start + (end - start) * factor;
    const startRGB = startColor.match(/\d+/g).map(Number);
    const endRGB = endColor.match(/\d+/g).map(Number);

    if (progress >= 100) {
      return color;
    }

    return `rgb(${interpolate(startRGB[0], endRGB[0])}, ${interpolate(
      startRGB[1],
      endRGB[1]
    )}, ${interpolate(startRGB[2], endRGB[2])})`;
  };

  const getColor = () => {
    // Return the initial color until 40%
    if (progress <= 40) return color;
  
    // Gradual color transitions based on progress
    if (progress <= 50) {
      const factor = (progress - 40) / 10; // Gradual transition from 40% to 50%
      if (color.toLowerCase() === 'red') {
        return interpolateColor("rgb(255, 0, 0)", "rgb(255, 255, 0)", factor); // Red to Yellow
      } else if (color.toLowerCase() === 'yellow') {
        return interpolateColor("rgb(255, 255, 0)", "rgb(255, 255, 0)", factor); // Yellow to Yellow (no change)
      } else if (color.toLowerCase() === "blue") {
        return interpolateColor("rgb(0, 0, 255)", "rgb(255, 255, 0)", factor); // Blue to Yellow
      } else {
        return interpolateColor("rgb(128, 128, 128)", "rgb(255, 255, 0)", factor); // Gray to Yellow
      }
    }
  
    if (progress <= 65) return "yellow";
    if (progress <= 75) {
      const factor = (progress - 65) / 10; // Gradual transition from 65% to 75%
      return interpolateColor("rgb(255, 255, 0)", "rgb(255, 165, 0)", factor); // Yellow to Orange
    }
    if (progress <= 90) return "orange";
    if (progress <= 100) {
      const factor = (progress - 90) / 10; // Gradual transition from 90% to 100%
      return interpolateColor("rgb(255, 165, 0)", "rgb(255, 0, 0)", factor); // Orange to Red
    }

  };
  
  
  
  
  

  const getBorderRadius = () => {
    if (progress >= 95) {
      const radius = (progress - 95) * (9 / 5); // Max radius of 9px at 100%
      return `0px 0px ${radius}px 0px`;
    }
    return "0px";
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <p
        style={{
          fontSize: "10px",
          color: "white",
          opacity: "0.75",
          position: "absolute",
          right: "1px",
          top: "-13px",
        }}
      >
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
