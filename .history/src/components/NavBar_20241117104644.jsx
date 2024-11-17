import { useState } from 'react'
import { BiLogoBaidu } from "react-icons/bi";

export default function NavBar(props) {
    return (
      <div className={`rounded-xl col-span-4 ${props.bgColor} flex items-center justify-end p-2`}>
        <BiLogoBaidu size={195} className="text-[#A0A0A0] text-opacity-10" />
        {props.Button}
      </div>
    )
}