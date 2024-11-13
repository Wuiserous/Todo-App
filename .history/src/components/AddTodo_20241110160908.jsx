export default function AddTodo(props) {
    return (
       <form action="">
        <input type="text" placeholder="Enter your task here..." className="w-full h-10 rounded-xl border border-gray-500 p-2 focus:outline-none" />
        <textarea name="" id="" className="w-full h-10 rounded-xl border border-gray-500 p-2 focus:outline-none" cols={30} rows={30}></textarea>
       </form>
    )
}