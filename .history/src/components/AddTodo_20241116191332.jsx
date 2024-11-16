import { IoIosTimer } from "react-icons/io";
import { useState } from "react"; // Don't forget to import useState

export default function AddTodo(props) {
    const [showTask, setShowTask] = useState(true);
    const [showTodo, setShowTodo] = useState(false);
    
    const dateString = props.date;
    const timeString = props.time;

    const dateParts = dateString.split("/");
    const monthNumber = parseInt(dateParts[0], 10);
    const day = dateParts[1];
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
            <div className="col-start-1 gap-2 col-end-11 mb-2 grid grid-cols-[1fr_1fr] grid-rows-[1fr]">
                <button className="col-start-1 hover:bg-blue-500 transform transition-all duration-300 rounded border p-2 col-span-1" onClick={handleTask}>Task</button>
                <button className="col-start-2 hover:bg-blue-500 transform transition-all duration-300 p-2 rounded col-span-1 border" onClick={handleTodo}>Todo-List</button>
            </div>

            {showTask && (
                <div className="grid auto-rows-auto gap-2 grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]">
                    <div className="row-span-1 col-span-10 border flex flex-row justify-center items-center rounded-lg rounded-br-[0px] bg-[#ffffff] pr-1">
                        {props.titleInput}
                        {day && time && (
                            <button className="w-fit h-fit focus:outline-none bg-orange-500 rounded-lg flex flex-row gap-1 p-1 rounded-br-[0px]" onClick={props.removeText}>
                                <span>{day}</span>
                                <span>{month}</span>
                                <span>{time}</span>
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
