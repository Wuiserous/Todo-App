import { useState } from 'react'
import { BiLogoBaidu } from "react-icons/bi";

export default function NavBar(props) {
    return (
      <div className={`rounded-xl col-span-4 ${props.bgColor} flex items-center p-2`}>
        <div className='w-full'>
          <div className='w-fit h-fit rounded-full border-[1px] p-1'>
          <BiLogoBaidu size={35} />
          </div>
        </div>
        {props.Button}
      </div>
    )
}