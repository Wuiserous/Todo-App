import { useState } from 'react'

export default function NavBar(props) {
    return (
      <div className={`rounded-xl col-span-4 ${props.bgColor} flex items-center p-2`}>
        {props.Button}
      </div>
    )
}