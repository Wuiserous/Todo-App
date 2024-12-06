export default function AddTodo(props) {
  let bgColor;

  switch (props.priority) {
    case 'P1':
      bgColor = 'bg-red-500'; // Urgent and Important -> High priority (Red)
      break;
    case 'P2':
      bgColor = 'bg-yellow-400'; // Important but not urgent -> Medium priority (Yellow)
      break;
    case 'P3':
      bgColor = 'bg-blue-500'; // Urgent but not important -> Low priority (Blue)
      break;
    case 'P4':
      bgColor = 'bg-gray-500'; // Not urgent and not important -> Very low priority (Gray)
      break;
    default:
      bgColor = 'bg-gray-300'; // Default background color if no priority
      break;
  }

  const dateString = props.date;
  const timeString = props.time;

  const dateParts = dateString.split("/");
  const monthNumber = parseInt(dateParts[1], 10);
  const day = dateParts[0];
  const year = dateParts[2];

  const month = new Date(year, monthNumber - 1).toLocaleString('en-GB', { month: "short" });

  const time = new Date(`1970-01-01 ${timeString}`).toLocaleTimeString("en-GB", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className="flex flex-col h-auto gap-2">
        <div className="row-span-1 col-span-10 flex flex-row justify-center items-center rounded-lg rounded-br-[0px]  pr-1 gap-1">
          {props.titleInput}
          {props.priority && (
            <div className={`${bgColor} w-fit h-fit p-1 rounded-lg rounded-br-[0px]`}>{props.priority}</div>
          )}
          {day && time && (
            <button
              className="w-fit h-fit focus:outline-none bg-orange-500 rounded-lg flex flex-row gap-1 p-1 rounded-br-[0px] relative hover:bg-red-500 group"
              onClick={props.removeText}
            >
              <span>{day}</span>
              <span>{month}</span>
              <span>{time}</span>

              {/* Cross Icon */}
              <span
                className="absolute right-[5px] text-[10px] top-[-1px] hidden text-white group-hover:block"
              >
                ✕
              </span>
            </button>
          )}
        </div>
        {props.descriptionInput}
        {props.urgentButton}
        {props.importantButton}
        {props.taskDeadLineButton}
      </div>
    </>
  );
}
