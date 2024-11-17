import { useState } from 'react'
import { BiLogoBaidu } from "react-icons/bi";

export default function NavBar(props) {
    return (
      <div className={`rounded-xl col-span-4 ${props.bgColor} flex items-center p-2`}>
        <div className='w-full'>
          <BiLogoBaidu size={45} className="ml-20text-purple-500" />
        </div>
        {props.Button}
      </div>
    )
}