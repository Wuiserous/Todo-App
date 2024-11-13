import { MdWbSunny } from "react-icons/md";
export default function NavBar() {
    return (
      <div className='rounded-xl col-span-4 border bg-transparent border-gray-500 flex items-center justify-end p-2'>
        <button className="w-10 h-10 border rounded-full flex items-center justify-center"><MdWbSunny size={25} /></button>
      </div>
    )
}