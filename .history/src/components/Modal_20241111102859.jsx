import { IoIosTimer } from "react-icons/io";
import { BsExclamationTriangle } from "react-icons/bs";
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
            <div className="col-start-1 gap-2 col-end-11 mb-2 grid grid-cols-[1fr_1fr]">
                <button className="col-start-1 rounded border p-2" onClick={handleTask}>Task</button>
                <button className="col-start-2 rounded border p-2" onClick={handleTodo}>Todo-List</button>
            </div>

            {showTask && (
                <div className="grid grid-cols-1 gap-4">
                    <input 
                        type="text" 
                        placeholder="Title here..." 
                        className="rounded border border-gray-500 p-2 bg-[#ffffff] focus:outline-none"
                    />
                    <textarea 
                        name="" 
                        id="" 
                        placeholder="Task here..." 
                        className="rounded text-black resize-none overflow-auto border border-gray-500 p-2 focus:outline-none bg-[#ffffff]"
                    ></textarea>

                    <div className="flex gap-2 mt-4">
                        <button className="rounded bg-white border-none p-2">
                            <BsExclamationTriangle className="text-black" size={25} />
                        </button>
                        <button className="rounded bg-black text-white p-2">
                            <IoIosStarOutline className="text-white" size={25} />
                        </button>
                        <button className="bg-blue-500 p-2 rounded flex-1">Add</button>
                        <button className="bg-white p-2 rounded">
                            <IoIosTimer className="text-black" size={25} />
                        </button>
                    </div>
                </div>
            )}

            {showTodo && (
                <div className="grid grid-rows-[auto] gap-2">
                    <div>todo</div>
                </div>
            )}
        </>
    );
}
