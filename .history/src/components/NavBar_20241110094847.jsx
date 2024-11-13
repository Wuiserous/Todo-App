import { useState } from 'react'

export default function NavBar(props) {
    return (
      <div className={`rounded-xl col-span-4 border bg-transparent $ flex items-center justify-end p-2`}>
        {props.Button}
      </div>
    )
}