export default function AddTodo(props) {
    return (
        <>
            <input type="text" placeholder="Title here..." className=" rounded border border-gray-500 p-2 focus:outline-none row-span-1 col-span-10" />
            <textarea name="" id="" placeholder="Task here..." className=" rounded text-white resize-none overflow-auto border border-gray-500 p-2 focus:outline-none bg- col-start-2 col-span-9 row-start-2 row-span-2"></textarea>
            <button className=" rounded-full bg-red-600 border-none focus:outline-none bg-black col-start-1 col-span-1 row-start-2 row-end-"></button>
            <button className=" rounded-full border-none bg-green-500 focus:outline-none bg-black col-start-1 border col-span-1 row-start-3 row-end-4"></button>
        </>

    )
}