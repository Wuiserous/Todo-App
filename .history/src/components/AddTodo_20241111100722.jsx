import { IoIosTimer } from "react-icons/io";
import { BsExclamationTriangle } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";
export default function AddTodo(props) {
    return (
        <>
            <div className="col-start-1 col-end-11 border grid grid-cols-[1fr_1fr] grid-rows-[1fr]"><button className="col-start-1 border p-2 col-span-1">Task</button><button className="col-start-2 p-2 col-span-1 border">To-do List</button></div>
            <div className="grid grid-rows-[1fr_40px_40px_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-2 grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]">

            </div>
            
        </>

    )
}