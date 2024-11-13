import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='w-screen p-2 gap-2 h-screen grid grid-cols-[50px_1fr_1fr_1fr] grid-rows-[50px_1fr_1fr_1fr]'>
      <div className='bg-orange-500 rounded-xl col-span-1 row-span-4'></div>
      <div className='rounded-xl col-span-3 bg-blue-500'></div>
      <div className='rounded-xl bg-yellow-500 3'></div>
      <div className='rounded-xl bg-green-500'></div> 
      <div className='rounded-xl bg-red-500 row-span-9'></div>
    </div>
  )
}

export default App
