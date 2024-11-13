import { IoIosTimer } from "react-icons/io";
import { BsExclamationTriangle } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";
import { useState } from "react"; // Don't forget to import useState

export default function AddTodo(props) {
    const [showTask, setShowTask] = useState(false);
    const [showTodo, setShowTodo] = useState(false);

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
                <button className="col-start-1 rounded border p-2 col-span-1" onClick={handleTask}>Task</button>
                <button className="col-start-2 p-2 rounded col-span-1 border" onClick={handleTodo}>Todo</button>
            </div>

            {showTask && (
                <div className="grid grid-rows-[1fr_40px_40px_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-2 grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]">
                    <input 
                        type="text" 
                        placeholder="Title here..." 
                        className="rounded border border-gray-500 p-2 bg-[#ffffff] focus:outline-none row-span-1 col-span-10" 
                    />
                    <textarea 
                        name="" 
                        id="" 
                        placeholder="Task here..." 
                        className="rounded resize-none overflow-auto border border-gray-500 p-2 focus:outline-none bg-[#ffffff] col-start-1 col-span-10 row-start-2 row-span-3"
                    ></textarea>
                    <button className="rounded bg-white border-none focus:outline-none col-start-9 col-span-1 row-start-5 row-end-5 p-2">
                        <BsExclamationTriangle size={25} />
                    </button>
                    <button className="rounded border-none bg-white focus:outline-none bg-black col-start-10 border col-span-1 row-start-5 row-end-5 p-2">
                        <IoIosStarOutline size={25} />
                    </button>
                    <button className="col-start-1 col-span-7 row-start-5 bg-blue-500 p-2 rounded">Add</button>
                    <button className="col-start-8 col-span-1 row-start-5 bg-white p-2 rounded">
                        <IoIosTimer size={30} />
                    </button>
                </div>
            )}

            {showTodo && (
                <div className="grid grid-rows-[1fr_40px_40px_1fr] gap-2 grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]">
                    todo
                </div>
            )}
        </>
    );
}
