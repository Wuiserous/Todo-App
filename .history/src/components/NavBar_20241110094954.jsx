import { useState } from 'react'

export default function NavBar(props) {
    return (
      <div className={`rounded-xl col-span-4 border ${props.bgColor} border-gray-500 flex items-center justify-end p-2`}>
        {props.Button}
      </div>
    )
}