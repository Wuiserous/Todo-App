import React from 'react';

export default function ProgressSpace(props) {
  const progress = props.progress || 50;  // Default to 50% if no progress is passed
  const size = 64;  // Default size of the circle
  const radius = 15.9155;  // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={`rounded-xl row-start-2 row-end-5 col-start-3 col-end-4 border ${props.bgColor} border-gray-500 relative flex justify-center items-center`}>
      {/* Circular Progress Bar */}
      <svg
        className={`w-${size} h-${size} transform rotate-90 absolute`}
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <path
          className="text-gray-200"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          d="M18 2.0845a15.9155 15.9155 0 0 1 13.208 7.8186A15.9155 15.9155 0 0 1 18 31.9155A15.9155 15.9155 0 0 1 4.791 9.9031A15.9155 15.9155 0 0 1 18 2.0845z"
        ></path>
        {/* Progress Circle */}
        <path
          className="text-blue-500"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          d="M18 2.0845a15.9155 15.9155 0 0 1 13.208 7.8186A15.9155 15.9155 0 0 1 18 31.9155A15.9155 15.9155 0 0 1 4.791 9.9031A15.9155 15.9155 0 0 1 18 2.0845z"
        ></path>
      </svg>

      {/* Avatar Image */}
      <img
        src={props.avatarUrl}
        alt="User Avatar"
        className="rounded-full w-24 h-24 object-cover border-4 border-white"
      />
    </div>
  );
}
