import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='w-screen p-2 gap-2 h-screen grid grid-cols-[50px_50px_50px_50px] grid-rows-[50px_670px_100px_300px]'>
      <div className='bg-orange-500 rounded-xl col-span-1 row-span-2'></div>
      <div className='rounded-xl bg-blue-500 2'></div>
      <div className=' rounded-xl bg-yellow-500 3'></div>
      <div className='  rounded-xl bg-green-500'></div>
      <div className='  rounded-xl bg-red-500'></div>
    </div>
  )
}

export default App
