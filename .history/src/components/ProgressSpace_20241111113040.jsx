export default function ProgressSpace({ progress = 25, size = 128 }) {
  const radius = 15.9155; // radius of the circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
    return (
      <div className={`rounded-xl row-start-2 row-end-5 col-start-3 col-end-4 border ${props.bgColor} border-gray-500`}>
        <div className="flex justify-center items-center">
      <svg
        className={`w-${size} h-${size} transform rotate-90`}
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="text-gray-200"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          d="M18 2.0845a15.9155 15.9155 0 0 1 13.208 7.8186A15.9155 15.9155 0 0 1 18 31.9155A15.9155 15.9155 0 0 1 4.791 9.9031A15.9155 15.9155 0 0 1 18 2.0845z"
        ></path>
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
    </div>
      </div> 
    )
}