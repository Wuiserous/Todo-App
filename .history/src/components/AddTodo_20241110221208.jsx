export default function AddTodo(props) {
    return (
        <>
            <input type="text" placeholder="Title here..." className="w-full h-10 rounded-xl border border-gray-500 p-2 focus:outline-none row-span-1 col-span-8" />
            <textarea name="" id="" placeholder="Task here..." className="w-full h-40 rounded-xl border border-gray-500 p-2 focus:outline-none col-start-2 col-span-7 row-start-2"></textarea>
            <div className="h-20 w-20 bg-black col-start-1 col-span-1"></div>
        </>

    )
}