import { MdWbSunny } from "react-icons/md";
import { AiFillMoon } from "react-icons/ai";
import { useState } from 'react'

export default function NavBar(sDark) {
  const [theme, setTheme] = useState('light')
    return (
      <div className='rounded-xl col-span-4 border bg-transparent border-gray-500 flex items-center justify-end p-2'>
        <button className="w-10 h-10 rounded-full flex items-center justify-center"><AiFillMoon size={25} /></button>
      </div>
    )
}