import { IoIosTimer } from "react-icons/io";
import { FaExclamationTriangle } from "react-icons/fa";
export default function AddTodo(props) {
    return (
        <>
            <input type="text" placeholder="Title here..." className=" rounded border border-gray-500 p-2 bg-[#ffffff] focus:outline-none row-span-1 col-span-10" />
            <textarea name="" id="" placeholder="Task here..." className=" rounded resize-none overflow-auto border border-gray-500 p-2 focus:outline-none bg-[#ffffff] col-start-1 col-span-10 row-start-2 row-span-3"></textarea>
            <button className=" rounded bg-yellow-400 border-none focus:outline-none col-start-9 col-span-1 row-start-5 row-end-5 p-2"><FaExclamationTriangle size={25} /></button>
            <button className=" rounded border-none bg-green-500 focus:outline-none bg-black col-start-10 border col-span-1 row-start-5 row-end-5"></button>
            <button className="col-start-1 col-span-7 row-start-5 bg-blue-500 p-2 rounded">Add</button>
            <button className="col-start-8 col-span-1 row-start-5 bg-white p-2 rounded"><IoIosTimer size={30} /></button>
        </>

    )
}