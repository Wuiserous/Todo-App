import { useState } from "react"; // Don't forget to import useState

export default function AddTodo(props) {
    const [showTask, setShowTask] = useState(true);
    const [showTodo, setShowTodo] = useState(false);
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

    const month = new Date(year, monthNumber - 1).toLocaleString('en-GB', { month: "short"});

    const time = new Date(`1970-01-01 ${timeString}`).toLocaleTimeString("en-GB", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    });

    const handleTask = () => {
        setShowTask(true);
        setShowTodo(false);
    };
    
    const handleTodo = () => {
        setShowTodo(true);
        setShowTask(false);
    };

    return (
        <>
            <div className="col-start-1 col-end-11 border-[0px] mb-2 grid grid-cols-[1fr_1fr] grid-rows-[1fr]">
                <button className={`col-start-1 hover:bg-blue-500 ${showTask ? "bg-blue-500": ""} transform transition-all rounded-lg rounded-br-[0px] rounded-bl-[0px] duration-200 border-b-[1px] border-blue-500 p-2 col-span-1`} onClick={handleTask}>Task</button>
                <button className={`col-start-2 hover:bg-blue-500 ${showTodo ? "bg-blue-500": ""} transform transition-all rounded-lg rounded-br-[0px] rounded-bl-[0px] duration-200 p-2 col-span-1 border-b-[1px] border-blue-500`} onClick={handleTodo}>Todo-List</button>
            </div>

            {showTask && (
                <div className="grid auto-rows-auto gap-2 grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]">
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
                    {props.submitButton}
                    {props.taskDeadLineButton}
                </div>
            )}

            {showTodo && (
                <div className="grid auto-rows-auto gap-2 grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]">
                <input 
                    type="text" 
                    placeholder="Title here..." 
                    className="rounded border text-black border-gray-500 p-2 bg-[#ffffff] focus:outline-none row-span-1 col-span-10" 
                />
                
                <button className="col-span-8 bg-blue-500 p-2 rounded">Add</button>
                {props.Button}
                {props.toDoDeadLineButton}
            </div>
            )}
        </>
    );
}
