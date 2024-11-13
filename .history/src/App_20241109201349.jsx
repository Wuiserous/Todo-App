import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='w-screen p-2 gap-2 h-screen grid grid-cols-[50px_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr]'>
      <div className='bg-orange-500 rounded-xl col-span-1'></div>
      <div className='rounded-xl bg-blue-500 2'></div>
      <div className='rounded-xl col-start-2 col-end-6 row-start-1 row-end-9 row-start-2 row-end-10 bg-yellow-500 3'></div>
      <div className='rounded-xl col-span-1 row-start-2 row-span-9 bg-green-500'></div> 
      <div className='rounded-xl col-span-2 bg-red-500 row-span-9'></div>
    </div>
  )
}

export default App
