import { IoIosTimer } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { useState } from "react"; // Don't forget to import useState

export default function AddTodo(props) {
    const [showTask, setShowTask] = useState(true);
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
                <button className="col-start-1 hover:bg-blue-500 transform transition-all duration-300 rounded border p-2 col-span-1" onClick={handleTask}>Task</button>
                <button className="col-start-2 hover:bg-blue-500 transform transition-all duration-300 p-2 rounded col-span-1 border" onClick={handleTodo}>Todo-List</button>
            </div>

            {showTask && (
                <div className="grid auto-rows-auto gap-2 grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]">
                    {props.titleInput}
                    {props.descriptionInput}
                    {props.urgentButton}
                    
                    {props.submitButton}
                    <button className="col-start-8 col-span-1 row-start-12 row-end-13 bg-white p-2 rounded">
                        <IoIosTimer className="text-black" size={25} />
                    </button>
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
                <button className=" bg-white p-2 rounded">
                    <IoIosTimer className="text-black" size={25} />
                </button>
            </div>
            )}
        </>
    );
}
