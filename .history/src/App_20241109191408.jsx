import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='w-screen p-2 gap-2 h-screen grid grid-cols-[50px_1200px_100px_300px] grid-rows-11'>
      <div className='bg-orange-500 rounded-xl col-span-1'></div>
      <div className='rounded-xl bg-blue-500 2'></div>
      <div className=' rounded-xl bg-yellow-500 3'></div>
      <div className='  rounded-xl bg-green-500'></div>
      <div className='  rounded-xl bg-red-500'></div>
    </div>
  )
}

export default App
