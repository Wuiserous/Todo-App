
import { useState } from 'react'

export default function NavBar({Button}) {
    return (
      <div className='rounded-xl col-span-4 border bg-transparent border-gray-500 flex items-center justify-end p-2'>
        {Button}
      </div>
    )
}