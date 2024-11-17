import { useState } from 'react'
import { PiPawPrint } from "react-icons/pi";

export default function NavBar(props) {
    return (
      <div className={`rounded-xl col-span-4 ${props.bgColor} flex items-center p-2`}>
        <div className='w-full'>
          <PiPawPrint size={45} className="ml-20 text-purple-500" />
        </div>
        {props.Button}
      </div>
    )
}