export default function AddTodo(props) {
    return (
        <>
            <input type="text" placeholder="Title here..." className=" rounded border border-gray-500 p-2 bg-[#ffffff] focus:outline-none row-span-1 col-span-10" />
            <textarea name="" id="" placeholder="Task here..." className=" rounded resize-none overflow-auto border border-gray-500 p-2 focus:outline-none bg-[#ffffff] col-start-1 col-span-10 row-start-2 row-span-3"></textarea>
            <button className=" rounded-full bg-red-600 border-none focus:outline-none bg-black col-start-9 col-span-1 row-start-4 row-end-4"></button>
            <button className=" rounded-full border-none bg-green-500 focus:outline-none bg-black col-start-1 border col-span-1 row-start-4 row-end-4"></button>
        </>

    )
}